<<<<<<< HEAD
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
=======
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
>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
