import { useContext } from "react";
import { Context } from "../../store/appContext";
import Pelicula from "../inicio/peliculas/pelicula/Pelicula";
import "./Favoritos.css";

const Favoritos = () => {
  const { favoritos, setFavoritos } = useContext(Context);

  //funcion para eliminar favoritos
  const removeFav = (id) => {
    setFavoritos(favoritos.filter((favorito) => favorito.id != id));
  };
  return (
    <div className="container p-2">
      <h1 className="text-center">Favoritos</h1>
      <div className="fav-container">
        {favoritos.length === 0 && (
          <h2 className="text-center text-danger m-5">
            Agrega peliculas a tus favoritos!
          </h2>
        )}
        {favoritos.map((movie) => (
          <Pelicula key={movie.id} {...movie}>
            <button
              onClick={() => removeFav(movie.id)}
              className="btn btn-danger"
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </Pelicula>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
