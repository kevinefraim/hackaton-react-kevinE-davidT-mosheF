import "./Navbar.css";
import logo from "../../img/logo-movies.png";
import { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { favoritos } = useContext(Context);
  return (
    <header>
      <div className="nav-container">
        <nav className="navbar navbar-light  justify-content-between">
          <div className="left-nav">
            <img src={logo} alt="logo" />
            <ul className="nav-list">
              <Link to="/" className="links">
                <li>Inicio</li>
              </Link>
              <Link to="/lanzamientos" className="links">
                <li>Lanzamientos</li>
              </Link>
            </ul>
          </div>
          <div className="right-nav">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <Link to="/favoritos" className="links">
              <i className="bi bi-heart-fill">{favoritos.length}</i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
