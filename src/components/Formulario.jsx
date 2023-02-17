import React, { useEffect, useState } from 'react';
import Error from './Error';

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [texto, setTexto] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setTexto(paciente.texto);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      email.trim() === '' ||
      fecha.trim() === '' ||
      texto.trim() === ''
    ) {
      setError(true);
      return;
    } else {
      setError(false);

      // Crear el objeto
      const objetoPaciente = {
        mascota,
        propietario,
        email,
        fecha,
        texto,
      };

      if (paciente.id) {
        // Editar
        objetoPaciente.id = paciente.id;

        const pacientesEditados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );
        setPacientes(pacientesEditados);
        setPaciente({});
      } else {
        // Agregar
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }

      // Reiniciar el form
      setMascota('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setTexto('');
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center">
        Añade pacientes y{' '}
        <span className="text-indigo-500 font-bold ">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error ? (
          <Error>
            <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5">
              Todos los campos son obligatorios
            </p>
          </Error>
        ) : null}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre de la Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomatología
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all duration-300"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        ></input>
      </form>
    </div>
  );
}
