import prisma from '../config/prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async ({ name, email, password }) => {
  // نتأكد أن الإيميل غير موجود
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('Email already exists');
  }

  // تشفير كلمة السر
  const hashedPassword = await bcrypt.hash(password, 10);

  // إنشاء المستخدم
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // ما نرجعوش كلمة السر
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
};

// Login User
export const loginUser = async ({ email, password }) => {
  // نلقى المستخدم
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  // مقارنة كلمة السر
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // إنشاء JWT Token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
       expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };
};
