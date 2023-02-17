import React from 'react';
import swal from 'sweetalert';

export default function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { mascota, propietario, email, fecha, texto, id } = paciente;

  const handleEliminarPaciente = () => {
    swal({
      title: '¿Estás seguro de eliminar este paciente?',
      text: 'Una vez eliminado, no podrás recuperar este paciente!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        eliminarPaciente(id);
        swal('Poof! El paciente ha sido eliminado!', {
          icon: 'success',
          timer: 2000,
        });
      } else {
        swal('El paciente no ha sido eliminado!');
      }
    });
  };

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
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="bg-indigo-600  px-10 py-2 rounded-lg text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all duration-300"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="bg-red-600 px-10 py-2 rounded-lg text-white uppercase font-bold hover:bg-red-800 cursor-pointer transition-all duration-300"
          onClick={handleEliminarPaciente}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
