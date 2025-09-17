<<<<<<< HEAD
/** @format */

import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default db;
=======
/** @format */

import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default db;
>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
