/** @format */

import express from "express";
import {
  getMovies,
  addMovies,
  getMovieDetails,
  searchMovies,
  getFavorites,
  addFavorite,
  removeFavorite,
  getAnimatedMovies,
  deleteMovie,
} from "../controllers/dataController.js";

const router = express.Router();

router.get("/movies", getMovies);

router.post("/addmovies", addMovies);

router.get("/details/:id", getMovieDetails);

router.get("/search", searchMovies);

router.get("/favorites", getFavorites);

router.post("/favorites", addFavorite);

router.delete("/favorites/:movieId", removeFavorite);

router.get("/animated", getAnimatedMovies);

router.delete("/deletemovie",  deleteMovie);

export default router;
