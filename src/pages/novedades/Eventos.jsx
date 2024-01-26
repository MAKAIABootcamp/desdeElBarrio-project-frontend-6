import React, { useEffect, useState } from "react";
import "./Styles.scss";
import AddCards from '../../components/AdminForm/AddCards.jsx'
import { getEvents, listenToEvents } from "../../firebase/firestoreCards.config";


const Eventos = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Obtener eventos iniciales
    const fetchData = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };
    fetchData();

    // Escuchar cambios en tiempo real en la colección de eventos
    const unsubscribe = listenToEvents((updatedEvents) => {
      setEvents(updatedEvents);
    });

    // Limpiar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <div className="main-title">Eventos</div>
      <div className="catalog">
        {events.map((event, index) => (
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

export default Eventos;
