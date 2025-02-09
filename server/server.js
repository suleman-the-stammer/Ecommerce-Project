import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth/authRoute.js';

dotenv.config();

connectdb();
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your client's origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});