import { Request, Response } from "express";

import { prisma } from "..";
import {
  includeProductRelations,
  buildCategoryData,
  buildImageData,
  buildSizeData,
  buildTagData,
} from "../utils/prismaUtils";
import { getChangedProductData } from "../utils/productUtils";
import { UserRole } from "@prisma/client";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";

export const getProducts = async (req: Request, res: Response) => {
  const {
    q,
    minPrice,
    maxPrice,
    category,
    tag,
    size,
    color,
    sortBy,
    page = 1,
    limit = 10,
  } = req.query;

  const where: any = {
    AND: [],
    isActive: true,
  };

  if (
    req.user?.role === UserRole.ADMIN ||
    req.user?.role === UserRole.MANAGER
  ) {
    delete where.isActive;
  }

  if (q) {
    where.AND.push({
      name: {
        contains: String(q),
        mode: "insensitive",
      },
    });
  }

  if (minPrice || maxPrice) {
    where.AND.push({
      price: {
        gte: minPrice ? Number(minPrice) : undefined,
        lte: maxPrice ? Number(maxPrice) : undefined,
      },
    });
  }

  if (category) {
    where.AND.push({
      categories: {
        some: {
          name: String(category),
        },
      },
    });
  }

  if (tag) {
    where.AND.push({
      tags: {
        some: {
          name: String(tag),
        },
      },
    });
  }

  if (size) {
    where.AND.push({
      sizes: {
        some: {
          name: String(size),
        },
      },
    });
  }

  if (color) {
    where.AND.push({
      images: {
        some: {
          color: {
            some: {
              name: String(color),
            },
          },
        },
      },
    });
  }

  const orderBy: any = {};
  if (sortBy === "price_asc") orderBy.price = "asc";
  if (sortBy === "price_desc") orderBy.price = "desc";
  if (sortBy === "newest") orderBy.createdAt = "desc";

  const skip = (Number(page) - 1) * Number(limit);

  const [products, totalCount] = await Promise.all([
    prisma.product.findMany({
      where,
      include: {
        ...includeProductRelations,
      },
      orderBy: orderBy,
      skip,
      take: Number(limit),
    }),
    prisma.product.count({
      where,
    }),
  ]);

  console.log(
    `LOG_BOOK - User: ${
      req.user?.username
    } fetched products at ${new Date().toLocaleString()} with filters: ${JSON.stringify(
      {
        q,
        minPrice,
        maxPrice,
        category,
        tag,
        size,
        color,
        sortBy,
        page,
        limit,
      }
    )}, count: ${totalCount}`
  );

  res.json({
    message: "Products fetched successfully",
    totalCount,
    currentPage: Number(page),
    totalPages: Math.ceil(totalCount / Number(limit)),
    products,
  });
};

export const getByProductId = async (req: Request, res: Response) => {
  const productId = Number(req.params.productId);
  if (isNaN(productId) || productId <= 0) {
    throw new NotFoundException(
      "Invalid product ID",
      ErrorCode.INVALID_PRODUCT_ID
    );
  }

  const where: any = {
    id: productId,
    isActive: true,
  };

  if (
    req.user?.role === UserRole.ADMIN ||
    req.user?.role === UserRole.MANAGER
  ) {
    delete where.isActive;
  }

  const product = await prisma.product.findUnique({
    where,
    include: {
      ...includeProductRelations,
    },
  });

  if (!product) {
    throw new NotFoundException(
      `Product with ID ${productId} not found`,
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }

  console.log(
    `LOG_BOOK - User: ${
      req.user?.username
    } fetched product with ID: ${productId} at ${new Date().toLocaleString()}`
  );

  res.json({
    message: "Products fetched successfully",
    product,
  });
};

export const createProduct = async (req: Request, res: Response) => {
  const {
    name,
    price,
    discount,
    description,
    stock,
    categories,
    tags,
    images,
    sizes,
  } = req.body;

  const product = await prisma.product.create({
    data: {
      name,
      price,
      discount: discount || 0,
      description,
      stock,
      categories: buildCategoryData(categories),
      tags: buildTagData(tags),
      images: buildImageData(images),
      sizes: buildSizeData(sizes),
    },
    include: {
      ...includeProductRelations,
    },
  });

  console.log(
    `LOG_BOOK - User: ${req.user?.username} created product - ID: ${
      product?.id
    } at ${new Date().toLocaleString()}`
  );

  res.json({
    message: "Product created successfully",
    product: product,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const productId = Number(req.params.productId);
  if (isNaN(productId) || productId <= 0) {
    throw new NotFoundException(
      "Invalid product ID",
      ErrorCode.INVALID_PRODUCT_ID
    );
  }

  let isActive: boolean | undefined = undefined;

  const where: any = {
    id: productId,
    isActive: true,
  };

  if (req.user?.role === UserRole.ADMIN) {
    delete where.isActive;
    isActive = req.body.isActive !== undefined ? req.body.isActive : undefined;
  }

  const existingProduct = await prisma.product.findUnique({
    where,
    include: {
      ...includeProductRelations,
    },
  });

  if (!existingProduct) {
    throw new NotFoundException(
      `Product with ID ${productId} not found`,
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }

  const updateData = getChangedProductData(req.body, existingProduct);

  const updatePayload =
    isActive !== undefined ? { ...updateData, isActive } : updateData;

  const updatedProduct = await prisma.product.update({
    where,
    data: updatePayload,
    include: {
      ...includeProductRelations,
    },
  });

  if (!updatedProduct) {
    throw new NotFoundException(
      `Failed to update product with ID ${productId}`,
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }

  console.log(
    `LOG_BOOK - User: ${req.user?.username} updated product - ID: ${
      updatedProduct.id
    } at ${new Date().toLocaleString()}`
  );

  res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = Number(req.params.productId);
  if (isNaN(productId) || productId <= 0) {
    throw new NotFoundException(
      "Invalid product ID",
      ErrorCode.INVALID_PRODUCT_ID
    );
  }

  const where: any = {
    id: productId,
  };

  const existingProduct = await prisma.product.findUnique({
    where,
  });

  if (!existingProduct) {
    throw new NotFoundException(
      `Product with ID ${productId} not found`,
      ErrorCode.PRODUCT_NOT_FOUND
    );
  }

  await prisma.product.update({
    where,
    data: { isActive: false },
  });

  console.log(
    `LOG_BOOK - User: ${req.user?.username} deleted product - ID: ${
      existingProduct.id
    } at ${new Date().toLocaleString()}`
  );

  res.status(200).json({
    message: `Product with ID ${productId} deleted successfully`,
  });
};
