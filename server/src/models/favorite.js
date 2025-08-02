/** @format */
import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  movieId: String,
  title: String,
  year: String,
  img: String,
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
export default Favorite;
