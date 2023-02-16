import React from 'react';

export default function Paciente({ paciente }) {
  const { mascota, propietario, email, fecha, texto } = paciente;

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mb-10 m-3 mx-5 my-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{' '}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{texto}</span>
      </p>
    </div>
  );
}
