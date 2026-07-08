import { createCategory, getCategories } from '../services/category.service.js';

// Create category
export const create = async (req, res) => {
  try {
    const category = await createCategory(req.body);

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get categories
export const getAll = async (req, res) => {
  try {
    const categories = await getCategories(req.params.establishmentId);

    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
