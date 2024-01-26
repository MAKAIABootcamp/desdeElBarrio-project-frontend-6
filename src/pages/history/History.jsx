import React from "react";
import "./Style.scss";
import Slider from "../../components/Slider/Slider";

export const History = () => {
  return (

    <div className="seccin-historia">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="noticias">Proyectos</div>
          <div className="slider-wrapper">
            <Slider />
          </div>

          <div className="rectangle-2" />
          <img className="img-2" alt="Img" src="https://res.cloudinary.com/dyuf3v9mb/image/upload/v1706244768/img_eqemp6.png" />
          <div className="container-main-title" />
          <div className="main-title">Nuestra Historia</div>
          <img className="container-text" alt="Rectangle" src="https://c.animaapp.com/0sp9g4x4/img/rectangle-31.svg" />

          <p className="text-wrapper-2">
            Entre estos procesos se pueden destacar principalmente la construcción de la primera biblioteca comunitaria
            del barrio Caunces de Oriente, ciclos de cine, foros, festivales, tomas culturales en espacios
            territoriales, corredores artísticos populares, micrófonos abiertos, bingos bailables, novenas navideñas,
            procesos formativos (teatro, circo, canto, etc..) iniciativas ambientales y jornadas deportivas.
          </p>
          <p className="text-wrapper-3">
            Es una corporación cultural y artística donde convergen diversos proyectos de jóvenes de la comuna 9 de
            Medellín. Esta iniciativa nace a partir del proceso del comité cultural del barrio Caunces de Oriente, dada
            la necesidad de abrir un espacio alternativo y con más eco que pudiese buscar otras formas de gestión de
            proyectos y construcción de procesos de colectivos juveniles
          </p>

          <div className="btn-group">
            <button className="portfoliobtn">
              <a className="Btn-portfolio" href="document/github-git-cheat-sheet.pdf" download="PortafolioDB" > Portafolio</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History