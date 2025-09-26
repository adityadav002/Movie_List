import MoiveCard from "../component/MoiveCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { GiPlantsAndAnimals } from "react-icons/gi";

function Animated() {
  const [animated, setAnimated] = useState([]);

  const fetchAnimatedMovies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/fetch/animated`
      );
      setAnimated(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching action movies:", error);
    }
  };

  useEffect(() => {
    fetchAnimatedMovies();
  }, []);
  return (
    <>
      <h1 className="add-movie-logo">
        <GiPlantsAndAnimals />
        Animated Movie
      </h1>
      <hr />
      <br />
      <MoiveCard movies={animated} />
    </>
  );
}

export default Animated;
