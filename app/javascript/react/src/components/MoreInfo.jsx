import * as React from "react";

const MoreInfo = () => {
  return (
    <section className="flex flex-col w-1/2 border-[#ededed] border-l-2 p-5 h-full text-sm">
      <h1 className="text-3xl font-extrabold">Hola Frogmi!</h1>
      <p className="mb-3 text-gray-500">
        Soy Alex Farfán y esta es mi prueba técnica para el puesto de Software
        Development Engineer. He desarrollado esta aplicación utilizando Rails,
        React y Tailwind, incluyendo todas las funcionalidades requeridas en la
        prueba técnica. Además, he agregado ciertas características adicionales
        por iniciativa propia, aunque estas están actualmente limitadas a una
        representación visual y no tienen funcionalidad operativa.
      </p>

      <h1 className="text-2xl font-extrabold">¿Cómo usar la app?</h1>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 1:</span> Carga los datos en la base de
        datos haciendo clic en el botón "Load Data" situado en la esquina
        superior derecha.
      </p>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 2:</span>Refresca la página. Una vez
        que los datos se hayan almacenado en la base de datos, el cliente
        realizará una consulta predeterminada a través de{" "}
        <a
          href="http://127.0.0.1:3000/api/features?page=1&per_page=1000"
          className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline"
          target="_blank"
        >
          http://127.0.0.1:3000/api/features?page=1&per_page=1000
        </a>
        .
      </p>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 3:</span> Para probar la paginación,
        utiliza los botones <span className="font-bold">Next</span> o{" "}
        <span className="font-bold">Prev</span> ubicados debajo del buscador
        principal. La paginación también se gestiona desde el lado del servidor
        y puede accederse a través de, por ejemplo,{" "}
        <a
          href="http://127.0.0.1:3000/api/features?page=3&per_page=50&mag_type=md,ml"
          className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline"
          target="_blank"
        >
          http://127.0.0.1:3000/api/features?page=3&per_page=50&mag_type=md,ml
        </a>
        .
      </p>
      <p className="mb-3 text-gray-500">
        <span className="font-bold">Paso 4:</span> Uno de los requisitos es
        filtrar los datos según el "mag_type", por lo que este es el único
        filtro disponible para el usuario. Utiliza el filtrado del backend, lo
        que significa que se realizará una consulta como{" "}
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
