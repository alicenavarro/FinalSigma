import React from "react";
import { Trabajador } from "./Formulariotrabajador";

interface Props {
  trabajadores: Trabajador[];
}

const ListaTrabajadores: React.FC<Props> = ({ trabajadores }) => {
  return (
    <div>
      <h2>Lista de trabajadores:</h2>
      <ul>
        {trabajadores.map((trabajador) => (
          <li key={trabajador.id}>
            {trabajador.nombre} {trabajador.apellido1} {trabajador.apellido2}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTrabajadores;
