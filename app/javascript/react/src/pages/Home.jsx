import * as React from "react";
import { createRoot } from "react-dom/client";
import Sidebar from "../components/sidebar/Sidebar";
import MoreInfo from "../components/MoreInfo";
import MainContent from "../components/content/MainContent";
import Navbar from "../components/Navbar";

const Home = () => {
  const [apiData, setApiData] = React.useState(null);

  React.useEffect(() => {
    // Función asíncrona para hacer la llamada a la API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:3000/api/features?page=1&per_page=1000"
        );
        const jsonData = await response.json();
        setApiData(jsonData); // Guardar los datos en el estado del componente
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    // Llamar a la función fetchData
    fetchData();

    // Es buena práctica cancelar la suscripción en el cleanup del useEffect
    return () => {
      // Cancelar cualquier suscripción, limpieza o reseteo necesario aquí
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-between border-[#ededed] border-t-2">
        <Sidebar apiData={apiData} />
        <MainContent apiData={apiData} />
        <MoreInfo />
      </div>
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  createRoot(document.getElementById("home")).render(<Home />);
});

export default Home;
