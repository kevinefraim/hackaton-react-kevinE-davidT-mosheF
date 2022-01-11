import "./Peliculas.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import Pelicula from "./pelicula/Pelicula";

const Peliculas = () => {
  const { datosPeliculas, setDatosPeliculas, addFav } = useContext(Context);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=49a69b2c3567b0c3d0a45489cf941263"
      )
      .then((response) => {
        setDatosPeliculas(response.data.results);
      });
  }, []);

  return (
    <>
      <h2 className="text-center m-2 p-2">Peliculas Populares</h2>
      <div className="populares">
        {datosPeliculas.map((movie) => (
          <Pelicula key={movie.id} {...movie}>
            <button
              onClick={() => addFav(movie)}
              className="btn btn-primary w-25"
            >
              <i className="bi bi-heart-fill"></i>
            </button>
          </Pelicula>
        ))}
      </div>
    </>
  );
};

export default Peliculas;
