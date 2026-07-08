import prisma from '../config/prisma.js';

// Create category
export const createCategory = async (data) => {
  const category = await prisma.category.create({
    data: {
      name: data.name,
      establishmentId: data.establishmentId,
    },
  });

  return category;
};

// Get categories by establishment
export const getCategories = async (establishmentId) => {
  const categories = await prisma.category.findMany({
    where: {
      establishmentId,
    },
    include: {
      products: true,
    },
  });

  return categories;
};
