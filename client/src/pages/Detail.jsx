<<<<<<< HEAD
/** @format */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style/DetailStyle.css";
import axios from "axios";
import { FaImdb } from "react-icons/fa6"; 

function Detail() {
  const [watchList, setWatchList] = useState([])
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

 useEffect(() => {
  const fetchWatchList = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/watch`);
      setWatchList(res.data);
    } catch (err) {
      console.error("Error fetching Watch List", err);
    }
  };
  fetchWatchList();
}, []);

  const isWatched = (movieId) => {
    return watchList.some((watch) => watch.movieId === movieId);
  }

  const toggleWatch = async (movie) => {
    try {
      if(isWatched(movie._id)){
        await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/watch/${movie._id}`);
      }
      else{
        await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/watch`, {
        movieId: movie._id,
        title: movie.title,
        year: movie.year,
        rating: movie.rating,
        img: movie.img || movie.poster,
      })
    }
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/watch`);
      setWatchList(res.data)
    } catch (error) {
      console.error("Error updating watchList", error);
    }
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/api/details/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Failed to fetch movie:", err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
<>
<div className="detail-container">
  <section className="detail-hero" style={{ backgroundImage: `url(${movie.img})` }}>
  <div className="detail-content">
    <h1>{movie.title}</h1>
    <div className="meta-tags">
      <span className="meta-tag fullhd">FULL HD</span>
      <span className="meta-tag">{movie.rating}<FaImdb className="meta_logo"/></span>
      <span className="meta-tag">{movie.year}</span>
      <span className="meta-tag">{movie.duration}</span>
    </div>
    <div className="language-tag">{movie.language}</div>
    <div className="bottom-content">
      <div className="category">
      Category<br />
      <span>{movie.genre}</span>
    </div>
    <button className="watch-trailer-btn">
      <a href={movie.trailer} target="blank">WATCH TRAILER</a>
    </button>
    </div>
  </div>
</section>
  <div className="detail-description">
    <h1>{movie.title}</h1>
    <hr />
    <div className="screenshot">
      <span>
        <img src={movie.screenshot1} alt="sc1" />
      </span>
      <span>
        <img src={movie.screenshot2} alt="sc2" />
      </span>
      <span>
        <img src={movie.screenshot3} alt="sc3" />
      </span>
      <span>
        <img src={movie.screenshot4} alt="sc4" />
      </span>
    </div>
    <h2>Story</h2>
    <hr />
    <p>{movie.desc}</p>
    <br />
  
    <center>
      <button 
          className={`Watch_list ${isWatched(movie._id) ? "watched" : "not-watched"}`}
          onClick={() => toggleWatch(movie)}
          title="Add to watch list"
      >
        {isWatched(movie._id) ? "✓ In Watchlist" : "+ Add to Watchlist"}
      </button>
    </center> 
  </div>  
</div>
</>
  );
}

export default Detail;
=======
/** @format */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style/DetailStyle.css";
import axios from "axios";
import { FaImdb } from "react-icons/fa6";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/api/details/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Failed to fetch movie:", err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
<>
<div className="detail-container">
  <section className="detail-hero" style={{ backgroundImage: `url(${movie.img})` }}>
  <div className="detail-content">
    <h1>{movie.title}</h1>
    <div className="meta-tags">
      <span className="meta-tag fullhd">FULL HD</span>
      <span className="meta-tag">{movie.rating}<FaImdb className="meta_logo"/></span>
      <span className="meta-tag">{movie.year}</span>
      <span className="meta-tag">{movie.duration}</span>
    </div>
    <div className="language-tag">{movie.language}</div>
    <div className="bottom-content">
      <div className="category">
      Category<br />
      <span>{movie.genre}</span>
    </div>
    <button className="watch-trailer-btn">
      <a href={movie.trailer} target="blank">WATCH TRAILER</a>
    </button>
    </div>
  </div>
</section>
  <div className="detail-description">
    <h1>{movie.title}</h1>
    <hr />
    <div className="screenshot">
      <span>
        <img src={movie.screenshot1} alt="sc1" />
      </span>
      <span>
        <img src={movie.screenshot2} alt="sc2" />
      </span>
      <span>
        <img src={movie.screenshot3} alt="sc3" />
      </span>
      <span>
        <img src={movie.screenshot4} alt="sc4" />
      </span>
    </div>
    <h2>Story</h2>
    <hr />
    <p>{movie.desc}</p>
  </div>  
</div>
</>
  );
}

export default Detail;
>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
