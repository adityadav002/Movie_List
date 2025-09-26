import MoiveCard from "../component/MoiveCard";
import { GiDramaMasks } from "react-icons/gi";
import { useState, useEffect } from "react";
import axios from "axios";

function Drama() {
  const [drama, setDrama] = useState([]);
  
    const fetchDramaMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/fetch/drama`
        );
        setDrama(response.data.movies || []);
      } catch (error) {
        console.error("Error fetching action movies:", error);
      }
    };
    useEffect(() => {
      fetchDramaMovies();
    }, []);
  return (
     <>
      <h1 className="add-movie-logo">
        <GiDramaMasks />
        Drama Movie
      </h1>
      <hr />
      <br />
      <MoiveCard movies={drama} />
    </>
  )
}

export default Drama