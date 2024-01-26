import React from "react";
import "./Styles.scss";

const workshops = [
  {
    image: "https://c.animaapp.com/Q9CmjvVd/img/image-4@2x.png",
    title: "Taller de Graffiti",
    date: "15 de Febrero",
  },
  {
    image: "https://c.animaapp.com/Q9CmjvVd/img/image-4-3@2x.png",
    title: "Taller de Circo",
    date: "17 de Febrero",
  },
  {
    image: "https://c.animaapp.com/Q9CmjvVd/img/image-4-2@2x.png",
    title: "Taller de Guitarra Acustica",
    date: "18 de Febrero",
  },
  {
    image: "https://c.animaapp.com/Q9CmjvVd/img/image-4-1@2x.png",
    title: "Taller de Defensa Personal",
    date: "Miércoles 8-10 p.m",
  },
];

export const Container = () => {
  return (
    <div className="container">
      <div className="main-title">Talleres</div>
      <div className="catalog">
        {workshops.map((workshop, index) => (
          <div className="container-card" key={index}>
            <div className="card">
              <img className="image" alt="Image" src={workshop.image} />
              <div className="details">
                <p className="title">{workshop.title}</p>
                <p className="date">{workshop.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
