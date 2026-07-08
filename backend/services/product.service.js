import prisma from '../config/prisma.js';

// Create product
export const createProduct = async (data) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      image: data.image,
      categoryId: data.categoryId,
    },
  });

  return product;
};

// Get products by category
export const getProducts = async (categoryId) => {
  const products = await prisma.product.findMany({
    where: {
      categoryId,
    },
  });

  return products;
};

// Update product
export const updateProduct = async (id, data) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      price: data.price,
      image: data.image,
    },
  });

  return product;
};

// Delete product
export const deleteProduct = async (id) => {
  const product = await prisma.product.delete({
    where: {
      id,
    },
  });

  return product;
};
