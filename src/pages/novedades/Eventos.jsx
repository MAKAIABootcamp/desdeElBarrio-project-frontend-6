import React from "react";
import "./Styles.scss";

const events = [
  {
    image: "https://c.animaapp.com/Zgqnbjdg/img/image-4@2x.png",
    title: "Batalla de Tags y batalla de Gallos!!",
    date: "20 de Diciembre",
  },
  {
    image: "https://c.animaapp.com/Zgqnbjdg/img/image-4-3@2x.png",
    title: "¡Se viene el segundo año del Festival Triple C!",
    date: "20 de Diciembre",
  },
  {
    image: "https://c.animaapp.com/Zgqnbjdg/img/image-4-2@2x.png",
    title: "Reconstrucción de memoria Barial",
    date: "1 de Agosto",
  },
  {
    image: "https://c.animaapp.com/Zgqnbjdg/img/image-4-1@2x.png",
    title: "Cine Foro Ainbo",
    date: "13 de Noviembre",
  },
];

export const Container = () => {
  return (
    <div className="container">
      <div className="main-title">Eventos </div>
      <div className="catalog">
        {events.map((event, index) => (
          <div className="container-card" key={index}>
            <div className="card">
              <img className="image" alt="Image" src={event.image} />
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
 
export default Container