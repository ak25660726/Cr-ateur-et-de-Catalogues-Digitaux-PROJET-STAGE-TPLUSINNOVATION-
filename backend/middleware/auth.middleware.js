import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    // ناخذ الـ token من Header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
      });
    }

    // الشكل يكون: Bearer TOKEN
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token format',
      });
    }

    // التحقق من الـ token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // نخزن معلومات المستخدم في request
    req.user = decoded;

    next();
  } 
  catch  {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};
