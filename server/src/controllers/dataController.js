/** @format */

import Movie from "../models/movies.js";
export const getMovies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const movies = await Movie.find().skip(skip).limit(limit);
    const total = await Movie.countDocuments();
    res.status(200).json({
      movies,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

export const addMovies = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).json({ error: "Failed to create movie" });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
};

export const searchMovies = async (req, res) => {
  const { q, page = 1, limit = 10 } = req.query;

  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  try {
    const movies = await Movie.find({
      title: { $regex: q, $options: "i" },
    })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    res.status(200).json({ movies });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Search failed" });
  }
};

// favoutire
import Favorite from "../models/favorite.js";

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
};

export const addFavorite = async (req, res) => {
  try {
    const { movieId, title, year, img } = req.body;

    const exists = await Favorite.findOne({ movieId });
    if (exists)
      return res.status(200).json({ message: "Already in favorites" });

    const newFav = new Favorite({ movieId, title, year, img });
    await newFav.save();

    res.status(201).json({ message: "Added to favorites" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add favorite" });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const { movieId } = req.params;
    await Favorite.deleteOne({ movieId });
    res.status(200).json({ message: "Removed from favorites" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove favorite" });
  }
};

export const getAnimatedMovies = async (req, res) => {
  try {
    const animatedMovies = await Movie.find({
      genre: { $regex: /(Animated|Animation)/i },
    });

    res.status(200).json({
      movies: animatedMovies,
      total: animatedMovies.length,
    });
  } catch (error) {
    console.error('Error fetching animated movies:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Movie title is required" });
    }

    const deletedMovie = await Movie.findOneAndDelete({ title });

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ message: "Server error" });
  }
}