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
 
// Watch-List
import Watch from "../models/WatchList.js";

export const getWatchList = async (req, res) => {
  try {
    const userId = req.user.id;
    const watch = await Watch.find({userId});
    res.json(watch);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch WatchList" });
  }
};

export const addWatchList = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId, title, year, img } = req.body;

    const exists = await Watch.findOne({ userId, movieId });
    if (exists)
      return res.status(200).json({ message: "Already in WatchList" });

    const newFav = new Watch({ userId, movieId, title, year, img });
    await newFav.save();

    res.status(201).json({ message: "Added to WatchList" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add WatchList" });
  }
};

export const removeWatchList = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId } = req.params;
    await Watch.deleteOne({ userId, movieId });
    res.status(200).json({ message: "Removed from WatchList" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove WatchList" });
  }
};

// favoutire
import Favorite from "../models/favorite.js";

export const getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;
    const favorites = await Favorite.find({ userId });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
};

export const addFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId, title, year, img } = req.body;

    const exists = await Favorite.findOne({ userId, movieId });
    if (exists) {
      return res.status(200).json({ message: "Already in favorites" });
    }

    const newFav = new Favorite({ userId, movieId, title, year, img });
    await newFav.save();

    res.status(201).json({ message: "Added to favorites" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add favorite" });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId } = req.params;
    await Favorite.findOneAndDelete({ userId, movieId });
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

export const getActionMovies = async (req, res) => {
  try {
    const actionMovies = await Movie.find({
      genre: { $regex: /(Action)/i },
    });

    res.status(200).json({
      movies: actionMovies,
      total: actionMovies.length,
    });
  } catch (error) {
    console.error('Error fetching animated movies:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getDramaMovies = async (req, res) => {
  try {
    const dramaMovies = await Movie.find({
      genre: { $regex: /(drama)/i },
    });

    res.status(200).json({
      movies: dramaMovies,
      total: dramaMovies.length,
    });
  } catch (error) {
    console.error('Error fetching animated movies:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getComedyMovies = async (req, res) => {
  try {
    const comedyMovies = await Movie.find({
      genre: { $regex: /(comedy)/i },
    });

    res.status(200).json({
      movies: comedyMovies,
      total: comedyMovies.length,
    });
  } catch (error) {
    console.error('Error fetching animated movies:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getHorrorMovies = async (req, res) => {
  try {
    const horrorMovies = await Movie.find({
      genre: { $regex: /(horror)/i },
    });

    res.status(200).json({
      movies: horrorMovies,
      total: horrorMovies.length,
    });
  } catch (error) {
    console.error('Error fetching animated movies:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};