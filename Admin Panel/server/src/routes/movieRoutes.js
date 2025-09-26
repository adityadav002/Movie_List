import express  from 'express';
import { addMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

router.post('/addmovies', addMovie);

router.delete('/deletemovie', deleteMovie);

export default router;