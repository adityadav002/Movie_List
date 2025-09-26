import Movie from "../models/movies.js";

export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const deletedMovie = await Movie.findOneAndDelete({ title: title });
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res
      .status(200)
      .json({ message: "Movie deleted successfully", movie: deletedMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
