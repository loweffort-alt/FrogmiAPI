// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Search from "./Search";
import Card from "./Card";
import Metadata from "./Metadata";
import LinkDenied from "./LinkDenied";

const MainContent = () => {
  const [apiData, setApiData] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(false);
  const [link, setLink] = React.useState("http://127.0.0.1:3000");
  const [showData, setShowData] = React.useState(false);

  function updateLink(newLink) {
    setLink(newLink);
  }

  React.useEffect(() => {
    const fetchData = async (link) => {
      try {
        const response = await fetch(link);
        const jsonData = await response.json();
        setApiData(jsonData);
      } catch (error) {
        setShowData(false);
        console.error("Error al obtener los datos:", error);
      }
    };

    if (link.startsWith("http://127.0.0.1:3000/api/features")) {
      fetchData(link);
      setShowData(true);
      console.log("eureka");
    } else {
      setShowData(false);
      console.log("link no permitido");
    }
    return () => {
      // Cancelar cualquier suscripción, limpieza o reseteo necesario aquí
    };
  }, [link]);

  const totalDataAmount = apiData?.metadata?.total;
  const data = apiData?.data;
  const dataAmount = data?.length;

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full">
      <Search updateLink={updateLink} />
      <Metadata dataAmount={dataAmount} totalDataAmount={totalDataAmount} />
      <div className="overflow-y-auto h-screen">
        {showData ? (
          data?.map((e, i) => (
            <section
              key={i}
              className={`w-full ${i === activeIndex ? "border-l-blue-700 border-l-4" : ""}`}
              onClick={() => handleClick(i)}
            >
              <Card info={e} />
            </section>
          ))
        ) : (
          <LinkDenied />
        )}
      </div>
    </section>
  );
};

export default MainContent;
