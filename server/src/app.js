<<<<<<< HEAD
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
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
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
=======
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
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
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


>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
