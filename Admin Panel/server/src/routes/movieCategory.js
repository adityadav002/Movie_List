import express from "express";
import {
  getAction,
  getAnimated,
  getComedy,
  getDrama,
  getSciFi,
  getHorror,
  getUsers,
  getMovies,
} from "../controllers/fetchMovieController.js";

const fetchRouter = express.Router();

fetchRouter.get("/action", getAction);

fetchRouter.get("/animated", getAnimated);

fetchRouter.get("/comedy", getComedy);

fetchRouter.get("/drama", getDrama);

fetchRouter.get("/scifi", getSciFi);

fetchRouter.get("/horror", getHorror);

fetchRouter.get("/users", getUsers);

fetchRouter.get("/movies", getMovies);

export default fetchRouter;
