import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./Detalles.css";

const Detalles = () => {
  const { addFav } = useContext(Context);
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

  return (
    <div className="container">
      <div className="left-container">
        <h1>{detalles.title}</h1>
        <p>{detalles.overview}</p>
        <p>
          <b>Valoracion:</b> {detalles.vote_average}
        </p>
        <p>
          <b>Lanzamiento:</b> {detalles.release_date}
        </p>
        <button
          onClick={() => addFav(detalles)}
          className="btn btn-primary mt-4"
        >
          Agregar a favoritos
        </button>
      </div>
      <div className="left-container">
        <img
          src={`https://image.tmdb.org/t/p/w300/${detalles.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Detalles;
