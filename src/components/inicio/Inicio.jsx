import axios from "axios";
import { useEffect, useState } from "react";
import Carrusel from "./Carrusel/Carrusel";
import Peliculas from "./peliculas/Peliculas";

const Inicio = () => {
  return (
    <>
      <Carrusel />
      <Peliculas />
    </>
  );
};

export default Inicio;
