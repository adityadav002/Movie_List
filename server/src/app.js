/** @format */

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectdb from "./libs/db.js";
import dataRoute from "./routes/dataRoute.js";
import session from 'express-session';


const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://movie-list-k1bd.onrender.com'
  ],
  credentials: true,
}));


app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
    cookie: ({
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
  })
  }),
);

app.get('/', (req, res) => {
  res.send('Backend is working ✅');
});

app.use("/api", dataRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  connectdb();
});

