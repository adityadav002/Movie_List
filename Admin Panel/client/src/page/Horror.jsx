import MoiveCard from "../component/MoiveCard";
import { TbPumpkinScary } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";


function Horror() {
  const [horror, setHorror] = useState([]);
  
    const fetchHorrorMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/fetch/horror`
        );
        setHorror(response.data.movies || []);
      } catch (error) {
        console.error("Error fetching action movies:", error);
      }
    };
    useEffect(() => {
      fetchHorrorMovies();
    }, []);

  return (
    <>
      <h1 className="add-movie-logo">
        <TbPumpkinScary />
        Horror Movie
      </h1>
      <hr />
      <br />
      <MoiveCard movies={horror} />
    </>
  )
}

export default Horror