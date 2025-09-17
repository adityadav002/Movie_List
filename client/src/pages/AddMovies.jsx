<<<<<<< HEAD
/** @format */
import { useState } from "react";
import axios from "axios";
import "../style/AddMoviesStyle.css";

function AddMovies() {
  const [deleteTitle, setDeleteTitle] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
    rating: "",
    year: "",
    duration: "",
    genre: "",
    language: "",
    trailer: "",
    screenshot1: "",
    screenshot2: "",
    screenshot3: "",
    screenshot4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/addmovies`, formData);
      alert("Movie added successfully!");
      setFormData({
        title: "",
        poster: "",
        desc: "",
        img: "",
        rating: "",
        year: "",
        duration: "",
        genre: "",
        language: "",
        trailer: "",
        screenshot1: "",
        screenshot2: "",
        screenshot3: "",
        screenshot4: "",
      });
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const handleDelete = async () => {
    if (!deleteTitle.trim()) {
      alert("Please enter a movie title to delete.");
      return;
    }

    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/deletemovie`, {
        data: { title: deleteTitle },
      });
      alert("Movie deleted successfully!");
      setDeleteTitle("");
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Failed to delete movie. Check the title or try again.");
    }
  };

  return (
    <div className="add-movie-container">
      <h1>Add a Movie</h1>
      <form className="movie-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Poster URL
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Story
          <input
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Main Image URL
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
            required
          />
        </label>
        <label>
          Year
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Duration
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <label>
          Language
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </label>
        <label>
          Trailer URL
          <input
            type="text"
            name="trailer"
            value={formData.trailer}
            onChange={handleChange}
          />
        </label>
        <label>
          Screen-shot-1 URL
          <input
            type="text"
            name="screenshot1"
            value={formData.screenshot1}
            onChange={handleChange}
          />
        </label>

        <label>
          Screen-shot-2 URL
          <input
            type="text"
            name="screenshot2"
            value={formData.screenshot2}
            onChange={handleChange}
          />
        </label>

        <label>
          Screen-shot-3 URL
          <input
            type="text"
            name="screenshot3"
            value={formData.screenshot3}
            onChange={handleChange}
          />
        </label>

        <label>
          Screen-shot-4 URL
          <input
            type="text"
            name="screenshot4"
            value={formData.screenshot4}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Movie</button>

        <hr />
        <center><h2>Delete a Movie</h2></center>
        <input
          type="text"
          placeholder="Enter full movie name"
          value={deleteTitle}
          onChange={(e) => setDeleteTitle(e.target.value)}
        />
        <button type="button" onClick={handleDelete}>
          Delete Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovies;
=======
/** @format */
import { useState } from "react";
import axios from "axios";
import "../style/AddMoviesStyle.css";

function AddMovies() {
  const [deleteTitle, setDeleteTitle] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
    rating: "",
    year: "",
    duration: "",
    genre: "",
    language: "",
    trailer: "",
    screenshot1: "",
    screenshot2: "",
    screenshot3: "",
    screenshot4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/addmovies`, formData);
      alert("Movie added successfully!");
      setFormData({
        title: "",
        poster: "",
        desc: "",
        img: "",
        rating: "",
        year: "",
        duration: "",
        genre: "",
        language: "",
        trailer: "",
        screenshot1: "",
        screenshot2: "",
        screenshot3: "",
        screenshot4: "",
      });
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const handleDelete = async () => {
    if (!deleteTitle.trim()) {
      alert("Please enter a movie title to delete.");
      return;
    }

    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/deletemovie`, {
        data: { title: deleteTitle },
      });
      alert("Movie deleted successfully!");
      setDeleteTitle("");
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Failed to delete movie. Check the title or try again.");
    }
  };

  return (
    <div className="add-movie-container">
      <h1>Add a Movie</h1>
      <form className="movie-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Poster URL
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Story
          <input
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Main Image URL
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
            required
          />
        </label>
        <label>
          Year
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Duration
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <label>
          Language
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </label>
        <label>
          Trailer URL
          <input
            type="text"
            name="trailer"
            value={formData.trailer}
            onChange={handleChange}
          />
        </label>
        <label>
          Screen-shot-1 URL
          <input
            type="text"
            name="screenshot1"
            value={formData.screenshot1}
            onChange={handleChange}
          />
        </label>

        <label>
          Screen-shot-2 URL
          <input
            type="text"
            name="screenshot2"
            value={formData.screenshot2}
            onChange={handleChange}
          />
        </label>

        <label>
          Screen-shot-3 URL
          <input
            type="text"
            name="screenshot3"
            value={formData.screenshot3}
            onChange={handleChange}
          />
        </label>

        <label>
          Screen-shot-4 URL
          <input
            type="text"
            name="screenshot4"
            value={formData.screenshot4}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Movie</button>

        <hr />
        <center><h2>Delete a Movie</h2></center>
        <input
          type="text"
          placeholder="Enter full movie name"
          value={deleteTitle}
          onChange={(e) => setDeleteTitle(e.target.value)}
        />
        <button type="button" onClick={handleDelete}>
          Delete Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovies;
>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
