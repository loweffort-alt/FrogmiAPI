// eslint-disable-next-line no-unused-vars
import * as React from "react";

const MoreInfo = () => {
  return (
    <section className="flex flex-col w-1/2 border-[#ededed] border-l-2 p-5 h-full text-sm">
      <h1 className="text-3xl font-extrabold">Hola Frogmi!</h1>
      <p className="mb-3 text-gray-500">
        Soy Alex Farfán y esta es mi prueba técnica para el puesto de Software
        Development Engineer. He desarrollado esta aplicación utilizando Rails,
        React y Tailwind, incluyendo todas las funcionalidades requeridas en la
        prueba técnica. También he añadido algunas características visuales
        extra, aunque actualmente están limitadas a una representación visual y
        no tienen funcionalidad operativa.
      </p>

      <h1 className="text-2xl font-extrabold">¿Cómo usar la app?</h1>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 1:</span> Carga los datos en la base de
        datos haciendo clic en el botón "Load Data" situado en la esquina
        superior derecha. Esperamos el mensaje de confirmación y estamos listos!
      </p>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 2:</span>Usa el buscador principal para
        escribir los links que quieres probar. Primero probaremos que funciona
        correctamente haciendo una consulta a{" "}
        <a
          href="http://127.0.0.1:3000/api/features?page=3&per_page=50&mag_type=md,ml"
          className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline"
          target="_blank"
        >
          http://127.0.0.1:3000/api/features
        </a>
        .
      </p>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 3:</span>Ahora probaremos la
        paginación, para esto tenemos modificar el número en{" "}
        <span className="font-bold">pages</span>, también podemos limitar la
        cantidad de datos por página en{" "}
        <span className="font-bold">per_page</span>{" "}
        <a
          href="http://127.0.0.1:3000/api/features?page=3&per_page=50&mag_type=md,ml"
          className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline"
          target="_blank"
        >
          http://127.0.0.1:3000/api/features?page=6&per_page=250
        </a>
        .
      </p>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 3:</span> También podemos filtrar la
        data por <span className="font-bold">mg_type</span> escribiendo los
        tipos que quieres separados por una coma, por ejemplo:{" "}
        <a
          href="http://127.0.0.1:3000/api/features?page=1&per_page=1000&mag_type=md,ml"
          className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline"
          target="_blank"
        >
          http://127.0.0.1:3000/api/features?page=1&per_page=1000&mag_type=md,ml
        </a>
        .
      </p>
    </section>
  );
};

export default MoreInfo;
