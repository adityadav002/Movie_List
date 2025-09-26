import { MdAttractions } from "react-icons/md";
import "../style/ActionMovie.css";
import MoiveCard from "../component/MoiveCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Action() {
  const [action, setAction] = useState([]);

  const fetchActionMovies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/fetch/action`
      );
      setAction(response.data.movies || []);
    } catch (error) {
      console.error("Error fetching action movies:", error);
    }
  };

  useEffect(() => {
    fetchActionMovies();
  }, []);

  return (
    <>
      <h1 className="add-movie-logo">
        <MdAttractions />
        Action Movie
      </h1>
      <hr />
      <br />
      <MoiveCard movies={action} />
    </>
  );
}

export default Action;