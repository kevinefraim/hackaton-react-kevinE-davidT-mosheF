import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Favoritos from "./components/favoritos/Favoritos";
import Detalles from "./components/detalles/Detalles";
import Inicio from "./components/inicio/Inicio";
import Navbar from "./components/navbar/Navbar";
import UserProvider from "./store/appContext";
import Lanzamientos from "./components/lanzamientos/Lanzamientos";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/lanzamientos" element={<Lanzamientos />} />
            <Route path="/:id" element={<Detalles />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
