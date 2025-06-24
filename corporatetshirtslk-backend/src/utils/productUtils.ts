import {
  buildCategoryData,
  buildTagData,
  buildImageData,
  buildSizeData,
} from "./prismaUtils";

export const hasChanged = (a: any, b: any): boolean =>
  JSON.stringify(a) !== JSON.stringify(b);

export const getChangedProductData = (newData: any, existingProduct: any) => {
  const updateData: any = {};

  const setIfChanged = (
    fieldName: string,
    newData: any,
    existingData: any,
    target: any
  ) => {
    const newValue = newData[fieldName];
    const oldValue = existingData[fieldName];
    if (newValue !== undefined && newValue !== oldValue) {
      target[fieldName] = newValue;
    }
  };

  const setIfChangedWithBuilder = (
    fieldName: string,
    newData: any,
    existingData: any,
    target: any,
    builder: (data: any) => any
  ) => {
    const newValue = newData[fieldName];
    const oldValue = existingData[fieldName];
    if (newValue && hasChanged(newValue, oldValue)) {
      target[fieldName] = builder(newValue);
    }
  };

  setIfChanged("name", newData, existingProduct, updateData);
  setIfChanged("price", newData, existingProduct, updateData);
  setIfChanged("discount", newData, existingProduct, updateData);
  setIfChanged("description", newData, existingProduct, updateData);
  setIfChanged("stock", newData, existingProduct, updateData);

  setIfChangedWithBuilder(
    "categories",
    newData,
    existingProduct,
    updateData,
    buildCategoryData
  );
  setIfChangedWithBuilder(
    "tags",
    newData,
    existingProduct,
    updateData,
    buildTagData
  );
  setIfChangedWithBuilder(
    "images",
    newData,
    existingProduct,
    updateData,
    buildImageData
  );
  setIfChangedWithBuilder(
    "sizes",
    newData,
    existingProduct,
    updateData,
    buildSizeData
  );

  return updateData;
};
