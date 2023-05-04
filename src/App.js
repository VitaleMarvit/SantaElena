import React from "react";
import './app.css'
import { Nav } from "./Components/Nav"
import { Header } from "./Components/Header";
import { QueOfrecemos } from "./Components/Que-Ofrecemos";
import { QuienesSomos } from "./Components/Quienes-Somos";
import { Proyecto } from "./Components/Proyecto";
import { Caracteristicas } from "./Components/Caracteristicas";
import { Contacto } from "./Components/Contacto";


function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="div-container">
        <Header />
        <QueOfrecemos />
        <QuienesSomos />
        <Proyecto />
        <Caracteristicas />
        <Contacto />
      </div>
    </React.Fragment>
  );
}

export default App;
