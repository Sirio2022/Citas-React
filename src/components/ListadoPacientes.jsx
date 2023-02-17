import React from 'react';
import Paciente from './Paciente';

export default function ListadoPacientes({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="mt-5 text-lg text-center">
            Administra tus{' '}
            <span className="text-indigo-500 font-bold ">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="mt-5 text-lg text-center">
            Muestra aquí tus{' '}
            <span className="text-indigo-500 font-bold ">Pacientes</span>
          </p>
        </>
      )}
    </div>
  );
}
