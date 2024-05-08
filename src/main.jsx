import React from "react";
import ReactDOM from "react-dom/client";
import PrimerComponente from "./Componentes/PrimerComponente/PrimerComponente";
import { Props } from "./Componentes/Props/Props";
import Contador from "./Componentes/Contador/Contador";
import "./style.css";
import ListadoApp from "./Componentes/Listado/ListadoApp";
import AgregarTarea from "./Componentes/AgregarTarea/AgregarTarea";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimerComponente />
    <Props

      subtitulo="ejemlpo de subtitulo"

    />
    <Contador value = {0}></Contador>
    <ListadoApp></ListadoApp>
    <AgregarTarea></AgregarTarea>
  </React.StrictMode>
);
