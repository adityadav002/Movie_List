  import { useState } from "react";
  import { TiDeleteOutline } from "react-icons/ti";
  import axios from "axios";
  import "../style/DeleteMovie.css";

  function DeleteMovie() {
    const [deleteTitle, setDeleteTitle] = useState("");

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
      <>
        <h2 className="add-movie-logo"><TiDeleteOutline />Delete a Movie</h2>
        <form className="movie-forms">
          <input
            type="text"
            placeholder="Enter full movie name"
            value={deleteTitle}
            onChange={(e) => setDeleteTitle(e.target.value)}
            required
          />
          <p className="note">
            <i>Note:</i> Please ensure the movie title is entered exactly as it
            appears in the database for successful deletion.
          </p>
          <br />
          <br />
          <button type="button" onClick={handleDelete}>
            Delete Movie
          </button>
        </form>
      </>
    );
  }

  export default DeleteMovie;
