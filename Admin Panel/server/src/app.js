import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectdb from './libs/db.js'
import movieRoutes from './routes/movieRoutes.js';
import movieCategory from './routes/movieCategory.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true,
}));

app.use('/api', movieRoutes);
app.use('/api/fetch', movieCategory);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectdb();
    console.log(`Server is running on port http://localhost:${PORT}`);
});