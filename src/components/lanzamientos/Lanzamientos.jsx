import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Pelicula from "../inicio/peliculas/pelicula/Pelicula";

const Lanzamientos = () => {
  const [lanzamientos, setLanzamientos] = useState([]);
  const { addFav } = useContext(Context);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=49a69b2c3567b0c3d0a45489cf941263`
      )
      .then((response) => {
        setLanzamientos(response.data.results);
      });
  }, []);

  return (
    <>
      <h1 className="text-center p-2">Nuevos lanzamientos</h1>
      <div className="fav-container">
        {lanzamientos.map((movie) => (
          <Pelicula key={movie.id} {...movie}>
            <button
              onClick={() => addFav(movie)}
              className="btn btn-primary w-25"
            >
              <i className="bi bi-heart-fill "></i>
            </button>
          </Pelicula>
        ))}
      </div>
    </>
  );
};

export default Lanzamientos;
