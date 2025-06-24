import { Request, Response } from "express";

import { prisma } from "..";
import {
  includeProductRelations,
  buildCategoryData,
  buildImageData,
  buildSizeData,
  buildTagData,
} from "../utils/prismaUtils";

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
