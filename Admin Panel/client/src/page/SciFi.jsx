import MoiveCard from "../component/MoiveCard";
import { GiMaterialsScience } from "react-icons/gi";
import { useState, useEffect } from "react";
import axios from "axios";

function SciFi() {
  const [scifi, setScifi] = useState([]);

  const fetchSciFiMovies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/fetch/scifi`
      );
      setScifi(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching action movies:", error);
    }
  };
  useEffect(() => {
    fetchSciFiMovies();
  }, []);
  
  return (
    <>
      <h1 className="add-movie-logo">
        <GiMaterialsScience />
        Sci-Fi Movie
      </h1>
      <hr />
      <br />
      <MoiveCard movies={scifi} />
    </>
  );
}

export default SciFi;
