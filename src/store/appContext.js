import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const UserProvider = ({ children }) => {
  const [datosPeliculas, setDatosPeliculas] = useState([]);
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  //Funcion para agregar a favoritos
  const addFav = (pelicula) => {
    const existe = favoritos.find((favorito) => favorito.id === pelicula.id);
    if (existe) return;
    setFavoritos([pelicula, ...favoritos]);
  };

  return (
    <Context.Provider
      value={{
        datosPeliculas,
        setDatosPeliculas,
        favoritos,
        setFavoritos,
        addFav,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
