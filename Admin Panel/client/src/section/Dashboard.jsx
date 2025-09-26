import { RiDashboardFill } from "react-icons/ri";
import { FaFilm, FaUsers } from "react-icons/fa";
import { GiPistolGun, GiDramaMasks, GiGhost } from "react-icons/gi";
import { MdAnimation, MdScience } from "react-icons/md";
import { FaLaughSquint } from "react-icons/fa";
import "../style/Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [movieCount, setMovieCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [actionCount, setActionCount] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [comedyCount, setComedyCount] = useState(0);
  const [dramaCount, setDramaCount] = useState(0);
  const [scifiCount, setScifiCount] = useState(0);
  const [horrorCount, setHorrorCount] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const baseURL = import.meta.env.VITE_SERVER_URL;

        const [movies, users, action, animated, comedy, drama, scifi, horror] =
          await Promise.all([
            axios.get(`${baseURL}/api/fetch/movies`),
            axios.get(`${baseURL}/api/fetch/users`),
            axios.get(`${baseURL}/api/fetch/action`),
            axios.get(`${baseURL}/api/fetch/animated`),
            axios.get(`${baseURL}/api/fetch/comedy`),
            axios.get(`${baseURL}/api/fetch/drama`),
            axios.get(`${baseURL}/api/fetch/scifi`),
            axios.get(`${baseURL}/api/fetch/horror`),
          ]);

        const moviesRes = await axios.get(`${baseURL}/api/fetch/movies`);
        setMovies(moviesRes.data.movies || []);
        setMovieCount(moviesRes.data.movies?.length || 0);
        setMovieCount(movies.data.movies?.length || 0);
        setUserCount(users.data.length || 0);
        setActionCount(action.data.movies?.length || 0);
        setAnimatedCount(animated.data.movies?.length || 0);
        setComedyCount(comedy.data.movies?.length || 0);
        setDramaCount(drama.data.movies?.length || 0);
        setScifiCount(scifi.data.movies?.length || 0);
        setHorrorCount(horror.data.movies?.length || 0);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">
        <RiDashboardFill className="icon" /> Dashboard
      </h1>

      <div className="stats-grid">
        <div className="stat-card movie-card">
          <FaFilm className="stat-icon" />
          <div>
            <h3>Total Movies</h3>
            <p>{movieCount}</p>
          </div>
        </div>

        <div className="stat-card user-card">
          <FaUsers className="stat-icon" />
          <div>
            <h3>Total Users</h3>
            <p>{userCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <GiPistolGun className="stat-icon" />
          <div>
            <h3>Action</h3>
            <p>{actionCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <MdAnimation className="stat-icon" />
          <div>
            <h3>Animated</h3>
            <p>{animatedCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <FaLaughSquint className="stat-icon" />
          <div>
            <h3>Comedy</h3>
            <p>{comedyCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <GiDramaMasks className="stat-icon" />
          <div>
            <h3>Drama</h3>
            <p>{dramaCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <MdScience className="stat-icon" />
          <div>
            <h3>Sci-Fi</h3>
            <p>{scifiCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <GiGhost className="stat-icon" />
          <div>
            <h3>Horror</h3>
            <p>{horrorCount}</p>
          </div>
        </div>

      </div>
      <div className="movie-list-section">
          <h2 className="movie-list-title">🎬 Movie Titles ({movieCount})</h2>
          <ul className="movie-list">
            {movies.map((movie) => (
              <li key={movie._id}>{movie.title}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default Dashboard;
