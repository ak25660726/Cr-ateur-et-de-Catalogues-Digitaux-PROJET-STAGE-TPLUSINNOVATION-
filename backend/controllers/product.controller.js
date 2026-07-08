import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../services/product.service.js';

// Create product
export const create = async (req, res) => {
  try {
    const product = await createProduct(req.body);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get products
export const getAll = async (req, res) => {
  try {
    const products = await getProducts(req.params.categoryId);

    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update product

export const update = async (req, res) => {
  try {
    const product = await updateProduct(req.params.id, req.body);

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete product
export const remove = async (req, res) => {
  try {
    const product = await deleteProduct(req.params.id);

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
