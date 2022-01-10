import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Detalles = () => {
  const { id } = useParams();
  const [detalles, setDetalles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=49a69b2c3567b0c3d0a45489cf941263`
      )
      .then((response) => {
        setDetalles(response.data);
      });
  }, []);
  console.log(detalles);
  return (
    <div className="container">
      <h1>{detalles.title}</h1>
      <p>{detalles.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w300/${detalles.poster_path}`}
        alt=""
      />
    </div>
  );
};

export default Detalles;
