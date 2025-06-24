import { Request, Response } from "express";

import { prisma } from "..";
import {
  includeProductRelations,
  buildCategoryData,
  buildImageData,
  buildSizeData,
  buildTagData,
} from "../utils/prismaUtils";

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
