import React, { useEffect, useState } from "react";
import "./Styles.scss";
import AddCards from '../../components/AdminForm/AddCards.jsx'
import { getNews, listenToNews } from "../../firebase/firestoreCards.config";

const Noticias = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Obtener eventos iniciales
    const fetchData = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };
    fetchData();

    // Escuchar cambios en tiempo real en la colección de eventos
    const unsubscribe = listenToNews((updatedEvents) => {
      setNews(updatedEvents);
    });

    // Limpiar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <div className="main-title">Noticias</div>
      <div className="catalog">
        {news.map((event, index) => (
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

export default Noticias;
