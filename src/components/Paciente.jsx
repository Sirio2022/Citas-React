import React from 'react';

export default function Paciente() {
  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mb-10 m-3 mx-5 my-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Obi</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{' '}
        <span className="font-normal normal-case">Juan Manuel</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{' '}
        <span className="font-normal normal-case">expedo360@outlook.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta:{' '}
        <span className="font-normal normal-case">19 de noviembre de 2023</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{' '}
        <span className="font-normal normal-case">No tenía nada.</span>
      </p>
    </div>
  );
}
