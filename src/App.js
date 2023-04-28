import React from "react";
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
      <Header />
      <QueOfrecemos />
      <QuienesSomos />
      <Proyecto />
      <Caracteristicas />
      <Contacto />
    </React.Fragment>
  );
}

export default App;
