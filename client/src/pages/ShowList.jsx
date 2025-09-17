/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/ShowListStyle.css";
import Slider from "../components/Slider";

function ShowList() {
  // URL Query Params and Search
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q") || "";

  // State declarations
  const [movies, setMovies] = useState([]); 
  const [animated, setAnimated] = useState([]); 
  const [action, setAction] = useState([]); 
  const [drama, setDrama] = useState([]); 
  const [comedy, setComedy] = useState([]); 
  const [horror, setHorror] = useState([]); 
  const [page, setPage] = useState(1); 
  const [hasMore, setHasMore] = useState(true); 
  const [loading, setLoading] = useState(false); 
  const limit = 4; 

  const [favorites, setFavorites] = useState([]); 
  console.log("Favorites count:", favorites.length);

  // Reset movies when search query changes
  useEffect(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
  }, [searchQuery]);

  // Fetch general/search movies with pagination
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const url = searchQuery
          ? `${import.meta.env.VITE_SERVER_URL}/api/search?q=${searchQuery}&page=${page}&limit=${limit}`
          : `${import.meta.env.VITE_SERVER_URL}/api/movies?page=${page}&limit=${limit}`;

        const res = await axios.get(url);
        const newMovies = res.data.movies;

        if (newMovies.length < limit) {
          setHasMore(false);
        }

        setMovies((prev) => (page === 1 ? newMovies : [...prev, ...newMovies]));
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, page]);

  // Load more button handler for pagination

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };  


  // Fetch user favorite movies

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/favorites`);
        setFavorites(res.data);
      } catch (err) {
        console.error("Error fetching favorites", err);
      }
    };
    fetchFavorites();
  }, []);

  
  // Check if a movie is in favorites

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.movieId === movieId);
  };


  // Toggle favorite/unfavorite a movie

  const toggleFavorite = async (movie) => {
    try {
      if (isFavorite(movie._id)) {
        await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/favorites/${movie._id}`);
      } else {
        await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/favorites`, {
          movieId: movie._id,
          title: movie.title,
          year: movie.year,
          rating: movie.rating,
          img: movie.img || movie.poster,
        });
      }
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/favorites`);
      setFavorites(res.data);
    } catch (err) {
      console.error("Error updating favorites", err);
    }
  };

  const fetchAnimatedMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/animated`);
      setAnimated(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching animated movies:", error);
    }
  };
  useEffect(() => {
    fetchAnimatedMovies();
  }, []);

  const fetchActionMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/action`);
      setAction(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching animated movies:", error);
    }
  };
  useEffect(() => {
    fetchActionMovies();
  }, []);

  const fetchDramaMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/drama`);
      setDrama(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching animated movies:", error);
    }
  };
  useEffect(() => {
    fetchDramaMovies();
  }, []);

  const fetchComedyMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/comedy`);
      setComedy(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching animated movies:", error);
    }
  };
  useEffect(() => {
    fetchComedyMovies();
  }, []);

  const fetchHorrorMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/horror`);
      setHorror(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching animated movies:", error);
    }
  };
  useEffect(() => {
    fetchHorrorMovies();
  }, []);

  return (
    <>
      <Slider />

      <div className="showlist-container">
        {/* General/Search Movies Section */}
        <div className="movie_header" id="bookmark">
          <h1>Movies</h1>
          <hr />
        </div>

        <div className="movie-grid">
          {movies.map((movie) => (
            <div className="movie-card" key={movie._id}>
              <img src={movie.poster} alt={movie.title} className="movie-img" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-actions">
                  <Link to={`/detail/${movie._id}`} className="details-link">
                    View Details
                  </Link>
                  <button
                    className="favorite-link"
                    onClick={() => toggleFavorite(movie)}
                    title="Add to Favorites"
                  >
                    {isFavorite(movie._id) ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loading && <p className="loading">Loading...</p>}
        {!loading && movies.length === 0 && <p>No movies found.</p>}
        {!loading && hasMore && (
          <button onClick={handleLoadMore} className="load-more-btn">
            Watch More
          </button>
        )}

        {/* Animated Movies Section */}
        <div className="movie_header" id="bookmark">
          <h1>Animated Movies</h1>
          <hr />
        </div>
        <div className="movie-grid">
          {animated.length > 0 ? (
            animated.map((movie) => (
              <div className="movie-card" key={movie._id}>
                <img src={movie.poster} alt={movie.title} className="movie-img" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-actions">
                    <Link to={`/detail/${movie._id}`} className="details-link">
                      View Details
                    </Link>
                     <button
                    className="favorite-link"
                    onClick={() => toggleFavorite(movie)}
                    title="Add to Favorites"
                  >
                    {isFavorite(movie._id) ? "❤️" : "🤍"}
                  </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No animated movies found.</p>
          )}
        </div>

        {/* Action Movie Section */}
        <div className="movie_header" id="bookmark">
          <h1>Action Movies</h1>
          <hr />
        </div>
        <div className="movie-grid">
          {action.length > 0 ? (
            action.map((movie) => (
              <div className="movie-card" key={movie._id}>
                <img src={movie.poster} alt={movie.title} className="movie-img" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-actions">
                    <Link to={`/detail/${movie._id}`} className="details-link">
                      View Details
                    </Link>
                     <button
                    className="favorite-link"
                    onClick={() => toggleFavorite(movie)}
                    title="Add to Favorites"
                  >
                    {isFavorite(movie._id) ? "❤️" : "🤍"}
                  </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No action movies found.</p>
          )}
        </div>

        {/* Drama Movie Section */}
        <div className="movie_header" id="bookmark">
          <h1>Drama Movies</h1>
          <hr />
        </div>
        <div className="movie-grid">
          {drama.length > 0 ? (
            drama.map((movie) => (
              <div className="movie-card" key={movie._id}>
                <img src={movie.poster} alt={movie.title} className="movie-img" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-actions">
                    <Link to={`/detail/${movie._id}`} className="details-link">
                      View Details
                    </Link>
                     <button
                    className="favorite-link"
                    onClick={() => toggleFavorite(movie)}
                    title="Add to Favorites"
                  >
                    {isFavorite(movie._id) ? "❤️" : "🤍"}
                  </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No action movies found.</p>
          )}
        </div>

        {/* Comedy Movie Section */}
        <div className="movie_header" id="bookmark">
          <h1>Comedy Movies</h1>
          <hr />
        </div>
        <div className="movie-grid">
          {comedy.length > 0 ? (
            comedy.map((movie) => (
              <div className="movie-card" key={movie._id}>
                <img src={movie.poster} alt={movie.title} className="movie-img" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-actions">
                    <Link to={`/detail/${movie._id}`} className="details-link">
                      View Details
                    </Link>
                     <button
                    className="favorite-link"
                    onClick={() => toggleFavorite(movie)}
                    title="Add to Favorites"
                  >
                    {isFavorite(movie._id) ? "❤️" : "🤍"}
                  </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No action movies found.</p>
          )}
        </div>

         {/* Horror Movie Section */}
        <div className="movie_header" id="bookmark">
          <h1>Horror Movies</h1>
          <hr />
        </div>
        <div className="movie-grid">
          {horror.length > 0 ? (
            horror.map((  movie) => (
              <div className="movie-card" key={movie._id}>
                <img src={movie.poster} alt={movie.title} className="movie-img" />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-actions">
                    <Link to={`/detail/${movie._id}`} className="details-link">
                      View Details
                    </Link>
                  <button
                    className="favorite-link"
                    onClick={() => toggleFavorite(movie)}
                    title="Add to Favorites"
                  >
                    {isFavorite(movie._id) ? "❤️" : "🤍"}
                  </button>     
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No action movies found.</p>
          )}
        </div>

      </div>
    </>
  );
}

export default ShowList;
