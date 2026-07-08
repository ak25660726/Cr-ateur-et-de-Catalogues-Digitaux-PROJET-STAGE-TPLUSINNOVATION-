import {
  createEstablishment,
  getUserEstablishments,
} from '../services/establishment.service.js';

// Create establishment
export const create = async (req, res) => {
  try {
    const establishment = await createEstablishment(req.body, req.user.id);

    res.status(201).json({
      success: true,
      data: establishment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get user's establishments
export const getAll = async (req, res) => {
  try {
    const establishments = await getUserEstablishments(req.user.id);

    res.json({
      success: true,
      data: establishments,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
