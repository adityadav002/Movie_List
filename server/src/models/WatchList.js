/** @format */
import mongoose from "mongoose";

const WatchSchema = new mongoose.Schema({
  movieId: String,
  title: String,
  year: String,
  img: String,
});

const Watch = mongoose.model("Watch", WatchSchema);
export default Watch;
