import prisma from '../config/prisma.js';

// Create Establishment
export const createEstablishment = async (data, userId) => {
  const establishment = await prisma.establishment.create({
    data: {
      name: data.name,
      description: data.description,
      logo: data.logo,
      ownerId: userId,
    },
  });

  return establishment;
};

// Get user's establishments
export const getUserEstablishments = async (userId) => {
  const establishments = await prisma.establishment.findMany({
    where: {
      ownerId: userId,
    },
    include: {
      categories: true,
    },
  });

  return establishments;
};
