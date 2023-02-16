import React from 'react';
import Paciente from './Paciente';

export default function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="mt-5 text-lg text-center">
        Administra tus{' '}
        <span className="text-indigo-500 font-bold ">Pacientes y Citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
     
    </div>
  );
}
