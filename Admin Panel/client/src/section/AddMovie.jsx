import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import "../style/AddMovie.css";

function AddMovie() {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("Submitting form data:", formData);
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/addmovies`,
        formData
      );
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

  return (
    <>
      <h1 className="add-movie-logo">
        <IoAddCircleOutline />
        Add Movie
      </h1>
      <div className="add-movie-container">
        <form className="movie-form parent" onSubmit={handleSubmit}>
          <div className="div1">
            <label>
              Title
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Movie Title"
              />
            </label>
          </div>
          <div className="div2">
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
                placeholder="0 to 10"
              />
            </label>
          </div>

          <div className="div3">
            {" "}
            <label>
              Year
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                placeholder="Release Year"
              />
            </label>
          </div>
          <div className="div4">
            {" "}
            <label>
              Duration
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                placeholder="e.g., 2h 30m"
              />
            </label>
          </div>

          <div className="div5">
            <label>
              Language
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                placeholder="e.g., English"
              />
            </label>
          </div>
          <div className="div6">
            <label>
              Genre
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
                placeholder="e.g., Action, Drama"
              />
            </label>
          </div>

          <div className="div13">
            <label className="form-full">
              Poster Image URL
              <input
                type="text"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
                required
                placeholder="Poster Image URL"
              />
            </label>
          </div>

          <div className="div7">
            {" "}
            <label className="form-full">
              Main Image URL
              <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
                required
                placeholder="Image URL"
              />
            </label>
          </div>
          <div className="div8">
            {" "}
            <label className="form-full">
              Trailer URL
              <input
                type="text"
                name="trailer"
                value={formData.trailer}
                onChange={handleChange}
                required
                placeholder="Trailer URL"
              />
            </label>
          </div>
          <div className="div9">
            <label>
              Screenshot 1
              <input
                type="text"
                name="screenshot1"
                value={formData.screenshot1}
                onChange={handleChange}
                required
                placeholder="Screenshot URL"
              />
            </label>
          </div>
          <div className="div10">
            {" "}
            <label>
              Screenshot 2
              <input
                type="text"
                name="screenshot2"
                value={formData.screenshot2}
                onChange={handleChange}
                required
                placeholder="Screenshot URL"
              />
            </label>
          </div>
          <div className="div11">
            <label>
              Screenshot 3
              <input
                type="text"
                name="screenshot3"
                value={formData.screenshot3}
                onChange={handleChange}
                required
                placeholder="Screenshot URL"
              />
            </label>
          </div>
          <div className="div12">
            <label>
              Screenshot 4
              <input
                type="text"
                name="screenshot4"
                value={formData.screenshot4}
                onChange={handleChange}
                required
                placeholder="Screenshot URL"
              />
            </label>
          </div>

          <label className="form-full">
            Story
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Movie Description"
            />
          </label>

          <button type="submit" className="form-full ">
            Add Movie
          </button>
        </form>
      </div>
    </>
  );
}

export default AddMovie;
