import React, { useEffect, useState } from "react";
import "./Styles.scss";
import { getWorkshops, listenToWorkshops } from "../../firebase/firestoreCards.config";

const Talleres = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // Obtener eventos iniciales
    const fetchData = async () => {
      const workshopsData = await getWorkshops();
      setWorkshops(workshopsData);
    };
    fetchData();

    // Escuchar cambios en tiempo real en la colección de eventos
    const unsubscribe = listenToWorkshops((updatedEvents) => {
      setWorkshops(updatedEvents);
    });

    // Limpiar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <div className="main-title">Talleres</div>
      <div className="catalog">
        {workshops.map((event, index) => (
          <div className="container-card" key={index}>
            <div className="card">
              <img className="image" alt="Image" src={event.imageUrl} />
              <div className="details">
                <p className="title">{event.title}</p>
                <p className="date">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talleres;
