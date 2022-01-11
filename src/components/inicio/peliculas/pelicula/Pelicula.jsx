import { Link } from "react-router-dom";
import "./Pelicula.css";

const Pelicula = ({ title, id, poster_path, vote_average, children }) => {
  return (
    <div class="card shadow" style={{ width: "18rem" }} key={id}>
      <img
        class="card-img-top"
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="Card image cap"
      />
      <div class="card-body">
        <div className="card-main">
          <Link to={`/${id}`} className="links">
            <h6 class="card-text">{title}</h6>
          </Link>
          <p class="card-text my-4">Calificación: {vote_average}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Pelicula;
