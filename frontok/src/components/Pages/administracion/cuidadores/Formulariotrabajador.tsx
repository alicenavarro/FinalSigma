import { useState } from "react";
import ListaTrabajadores from "./ListaTrabajadores";

export interface Trabajador {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  correo: string;
  telefono: string;
  direccion: string;
  horario: string;
  horassemana: string;
  salario: string;
}

function FormularioTrabajador() {
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [horario, setHorario] = useState("");
  const [horassemana, setHorassemana] = useState("");
  const [salario, setSalario] = useState("");

  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nuevoTrabajador: Trabajador = {
      id: trabajadores.length + 1,
      nombre,
      apellido1,
      apellido2,
      correo,
      telefono,
      direccion,
      horario,
      horassemana,
      salario,
    };

    setTrabajadores([...trabajadores, nuevoTrabajador]);

    setNombre("");
    setApellido1("");
    setApellido2("");
    setCorreo("");
    setTelefono("");
    setDireccion("");
    setHorario("");
    setHorassemana("");
    setSalario("");
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ... */}
        <button type="submit">Agregar trabajador</button>
      </form>

      <ListaTrabajadores trabajadores={trabajadores} />
    </div>
  );
}

export default FormularioTrabajador;

