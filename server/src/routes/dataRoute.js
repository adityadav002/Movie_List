<<<<<<< HEAD
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
  getActionMovies,
  getDramaMovies,
  getComedyMovies,
  getHorrorMovies,
  addWatchList,
  removeWatchList,
  getWatchList
} from "../controllers/dataController.js";

const router = express.Router();

router.get("/movies", getMovies);

router.post("/addmovies", addMovies);

router.get("/details/:id", getMovieDetails);

router.get("/search", searchMovies);

router.get("/favorites", getFavorites);

router.post("/favorites", addFavorite);

router.delete("/favorites/:movieId", removeFavorite);

router.get("/watch", getWatchList);

router.post("/watch", addWatchList);

router.delete("/watch/:movieId", removeWatchList);

router.get("/animated", getAnimatedMovies);

router.get("/action", getActionMovies);

router.get("/drama", getDramaMovies);

router.get("/comedy", getComedyMovies);

router.get("/horror", getHorrorMovies);

router.delete("/deletemovie", deleteMovie);

export default router;
=======
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
>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
