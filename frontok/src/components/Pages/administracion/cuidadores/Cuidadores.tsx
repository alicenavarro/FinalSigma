import { useState } from "react";
import ListaTrabajadores from "./ListaTrabajadores";
import FormularioTrabajador from "./Formulariotrabajador";


interface Trabajador {
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
  
    if (!nombre || !apellido1 || !correo || !telefono || !direccion || !horario || !horassemana || !salario) {
      // Si falta algún campo, muestra una alerta
      alert('Por favor, complete todos los campos');
      return;
    }
  
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
      salario 
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
  
  const [mostrarListado, setMostrarListado] = useState(true);
  const [trabajadorSeleccionado, setTrabajadorSeleccionado] = useState<Trabajador | undefined>(undefined);

  const handleNuevoTrabajador = () => {
    setTrabajadorSeleccionado(undefined);
    setMostrarListado(false);
  };

  const handleEditarTrabajador = (trabajador: Trabajador) => {
    setTrabajadorSeleccionado(trabajador);
    setMostrarListado(false);
  };

  const handleVolver = () => {
    setMostrarListado(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
      <label htmlFor="apellido1">Apellido 1:</label>
      <input
      type="text"
      id="apellido1"
      value={apellido1}
      onChange={(e) => setApellido1(e.target.value)}
    />
</div>

        <div>
          <label htmlFor="apellido2">Apellido 2:</label>
          <input
            type="text"
            id="apellido2"
            value={apellido2}
            onChange={(e) => setApellido2(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Horario">Horario:</label>
          <input
            type="text"
            id="Horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Horassemana">Horas semana:</label>
          <input
            type="text"
            id="Horassemana"
            value={horassemana}
            onChange={(e) => setHorassemana(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Salario">Salario:</label>
          <input
            type="text"
            id="Salario"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <button type="submit">Agregar trabajador</button>
      </form>

      <ListaTrabajadores trabajadores={trabajadores} />  
    </div>
  );
}
export default FormularioTrabajador;