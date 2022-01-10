import { Link } from "react-router-dom";

const Pelicula = ({ title, id, poster_path, vote_average, children }) => {
  return (
    <div class="card shadow" style={{ width: "18rem" }} key={id}>
      <img
        class="card-img-top"
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="Card image cap"
      />
      <div class="card-body">
        <Link to={`/${id}`} className="links">
          <h6 class="card-text">{title}</h6>
        </Link>
        <div className="description">
          <p class="card-text">Calificación: {vote_average}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Pelicula;
