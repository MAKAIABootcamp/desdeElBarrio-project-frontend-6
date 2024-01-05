import React from 'react'
import './Styles.scss'
import noticia1 from '../../images/noticia1.jpg'
import noticia2 from '../../images/noticia2.jpg'
import noticia3 from '../../images/noticia3.jpg'
import noticia4 from '../../images/noticia4.jpg'

const news = [
    {
        image: {noticia1},
        title: "Participación en el día de la familia en la Institución Educativa Merceditas Gómez Martínez. ",
        date: "18 de octubre 2019",
    },
    {
        image: {noticia2},
        title: "Torneo de ajedrez 29 de febrero.Porque pensar estrategias tambien es divertido, aquí los momentos que se vivieron en nuestro primer torneo de ajedrez.",
    },
    {
        image: {noticia3},
        title: "Comunidad del barrio Caunces de Oriente. Aprovechando el mes de las cometas, compartimos tips y materiales para que las personas armaran sus propias cometas.",
    },
    {
      image: {noticia4},
      title: "Nos unimos con @somosxnaturaleza para que las y los peques de La Honda y Caunces de Oriente tengan una navidad llena de regalitos 🎄",

    },
];

export const Noticias = () => {
    return (
      <div className="container">
        <div className="main-title">Noticias</div>
        <div className="catalog">
          {news.map((news, index) => (
            <div className="container-card" key={index}>
              <div className="card">
                <img className="image" alt="Image" src={news.image} />
                <div className="details">
                  <p className="title">{news.title}</p>
                  <p className="date">{news.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Noticias;