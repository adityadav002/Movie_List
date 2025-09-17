/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/ShowListStyle.css";

function WatchLater() {
  const [watchLaterList, setWatchLaterList] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/watch`, {
          withCredentials: true,
        });

        console.log(res.data);
        setWatchLaterList(res.data);
      } catch (err) {
        console.error("Failed to fetch watch later list", err);
      }
    };
    fetchWatchLater();
  }, []);

  return (
    <div className="showlist-container">
      <div className="movie-grid">
        {watchLaterList.length === 0 ? (
          <p className="fav_empty">No movies in Watch Later.</p>
        ) : (
          watchLaterList.map((movie) => (
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

export default WatchLater;
