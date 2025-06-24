export const includeProductRelations = {
  categories: true,
  tags: true,
  images: {
    include: {
      color: true,
    },
  },
  sizes: true,
};

export const buildCategoryData = (categories: string[]) => ({
  connectOrCreate: categories.map((name) => ({
    where: { name },
    create: { name },
  })),
});

export const buildTagData = (tags: string[]) => ({
  connectOrCreate: tags.map((name) => ({
    where: { name },
    create: { name },
  })),
});

export const buildImageData = (images: any[]) => ({
  create: images.map((image) => {
    const data: any = {
      imageUrl: image.imageUrl,
      primary: image.primary || false,
    };

    if (image.colorName && image.colorCode) {
      data.color = {
        connectOrCreate: {
          where: { name: image.colorName },
          create: { name: image.colorName, colorCode: image.colorCode },
        },
      };
    }

    return data;
  }),
});

export const buildSizeData = (sizes: string[]) => ({
  connectOrCreate: sizes.map((name) => ({
    where: { name },
    create: { name },
  })),
});
