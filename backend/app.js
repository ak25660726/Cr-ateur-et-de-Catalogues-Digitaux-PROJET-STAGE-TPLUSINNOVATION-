import express from 'express';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';
import { authMiddleware } from './middleware/auth.middleware.js';
import establishmentRoutes from './routes/establishment.routes.js';
import categoryRoutes from './routes/category.routes.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/establishments', establishmentRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.get('/api/test', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected route works',
    user: req.user,
  });
});

app.get('/', (req, res) => {
  res.send('مرحبًا بك في Digital Menu API 🚀');
});

export default app;
