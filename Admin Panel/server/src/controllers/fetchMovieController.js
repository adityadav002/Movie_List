import Movie from '../models/movies.js';

export const getAction = async (req, res) => {
  try {
    const movies = await Movie.find({
      genre: { $regex: /Action/i },
    });
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch action movies." });
  }
}

export const getAnimated = async (req, res) => {
  try {
    const movies = await Movie.find({
      genre: { $regex: /(Animated|Animation)/i },
    });
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch action movies." });
  }
}

export const getComedy = async (req, res) => {
  try {
    const movies = await Movie.find({
      genre: { $regex: /(Comedy)/i },
    });
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch action movies." });
  }
}

export const getDrama = async (req, res) => {
  try {
    const movies = await Movie.find({
      genre: { $regex: /(Drama)/i },
    });
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch action movies." });
  }
}

export const getSciFi = async (req, res) => {
  try {
    const movies = await Movie.find({
      genre: { $regex: /(Science Fiction)/i },
    });
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch action movies." });
  }
}

export const getHorror = async (req, res) => {
  try {
    const movies = await Movie.find({
      genre: { $regex: /(horror)/i },
    });
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch action movies." });
  }
}

import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  }
  catch (error) {
    res.status(500).json({ error: "Failed to fetch users." });
  }
}

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json({ movies });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  } 
}
