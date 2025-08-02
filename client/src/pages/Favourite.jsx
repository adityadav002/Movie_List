/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/ShowListStyle.css";

function Favourite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/favorites`, {
          withCredentials: true, // ✅ Include credentials for session cookies
        });

        console.log(res.data);
        setFavorites(res.data);
      } catch (err) {
        console.error("Failed to fetch favorites", err);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="showlist-container">
      <div className="movie-grid">
        {favorites.length === 0 ? (
          <p className="fav_empty">No favorites yet.</p>
        ) : (
          favorites.map((movie) => (
            <div className="movie-card" key={movie.movieId}>
              <img src={movie.img} alt={movie.title} className="movie-img" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <Link to={`/detail/${movie.movieId}`} className="details-link">
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favourite;
