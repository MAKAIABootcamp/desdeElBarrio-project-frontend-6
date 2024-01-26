import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const workLines = [
    {
      title: "Talleres formativos",
      description:
        "Ofrecemos una amplia gama de talleres formativos, que abarcan disciplinas como danza, circo, canto, graffiti y otras expresiones artísticas, proporcionando oportunidades valiosas para el desarrollo creativo y personal de los participantes.",
    },
    {
      title: "Eventos culturales",
      description:
        "Realizamos una amplia variedad de eventos. Desde experiencias musicales y recreativas hasta expresiones artísticas, cine y deportes. Nos dedicamos a fomentar y visibilizar la riqueza cultural de nuestro territorio.",
    },
    {
      title: "Proyectos específicos",
      description:
        "Desde el Barrio impulsa proyectos con un impacto tangible. Trabajamos proyectos educativos, ambientales, deportivos, sobre género y sexualidad. ",
    },
  ];

  const webSiteContent = [
    {
      title: "Novedades",
      image:
        "https://res.cloudinary.com/dpc1vrbek/image/upload/v1704250728/Group_13_d13qpk.png",
      link: "./Eventos",
    },
    {
      title: "Historia",
      image:
        "https://res.cloudinary.com/dpc1vrbek/image/upload/v1704250728/Group_14_fijwvu.png",
      link: "./Historia",
    },
    {
      title: "Apóyanos",
      image:
        "https://res.cloudinary.com/dpc1vrbek/image/upload/v1704250728/Group_15_bgba6q.png",
      link: "./Apoyanos",
    },
  ];
  return (
    <main>
      <div className="main__img">
        <img
          src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703320536/Image_154_stluxt.png"
          alt=""
        />
      </div>
      <section className="quienes-somos-container">
        <div>
          <img
            src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703392144/quienes_somos_hbzbws.jpg"
            alt=""
          />
        </div>
        <div className="text-column">
          <h1>¿Quiénes somos?</h1>
          <p>
            Desde el Barrio es una corporación cultural y artística donde
            convergen diversos proyectos de jóvenes de la comuna 9 de Medellín.
            Esta iniciativa nace a partir del proceso del comité cultural del
            barrio Caunces de Oriente, dada la necesidad de abrir un espacio
            alternativo y con más eco que pudiese buscar otras formas de gestión
            de proyectos y construcción de procesos juveniles.
          </p>
          <a href="History">
            <button className="leer-button">Leer más</button>
          </a>
        </div>
      </section>

      <div className="lineas-container">
        <img
          className="background-image"
          src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1704246039/IMG_2043_pfryiy.jpg "
          alt="linea de trabajo"
        />
        <h1>Líneas de trabajo</h1>
        <section className="workCards">
          {workLines.map((item, index) => (
            <article className="workCard" key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>
      </div>
      <section className="contentCards">
        {webSiteContent.map((item, index) => (
          <figure
            key={index}
            className="contentCard"
            onClick={() => navigate(item.link)}
          >
            <img src={item.image} alt={item.title} />
            {/* <figcaption>{ item.title}</figcaption> */}
          </figure>
        ))}
      </section>
    </main>
  );
};

export default Home;
