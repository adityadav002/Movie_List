import { MdOutlineTheaterComedy } from "react-icons/md";
import MoiveCard from "../component/MoiveCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Comedy() {
  const [comedy, setComedy] = useState([]);

  const fetchComedyMovies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/fetch/comedy`
      );
      setComedy(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching action movies:", error);
    }
  };
  useEffect(() => {
    fetchComedyMovies();
  }, []);
  return (
    <>
      <h1 className="add-movie-logo">
        <MdOutlineTheaterComedy />
        Comedy Movie
      </h1>
      <hr />
      <br />
      <MoiveCard movies={comedy} />
    </>
  );
}

export default Comedy;
