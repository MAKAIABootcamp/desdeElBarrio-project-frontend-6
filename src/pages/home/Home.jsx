import React from 'react'
import './Home.scss';

const Home = () => {
    return (
        <div>
        <div className='main__img'>
            <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703320536/Image_154_stluxt.png" alt="" />
        </div>
        <div className='quienes-somos-container'>
          <div>
        <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703392144/quienes_somos_hbzbws.jpg" alt="" />
        </div>
        <div class="text-column">
          <h1>¿Quiénes somos?</h1>
          <p>Desde el Barrio es una corporación cultural y artística donde convergen diversos proyectos de jóvenes de la comuna 9 de Medellín. Esta iniciativa nace a partir del proceso del comité cultural del barrio Caunces de Oriente, dada la necesidad de abrir un espacio alternativo y con más eco que pudiese buscar otras formas de gestión de proyectos y construcción de procesos juveniles.</p>
          <a href="historia">
          <button className='leer-button'>Leer más</button>
          </a>
        </div>
        </div>
       
          <div className='lineas-container'>
          <img id='background-image' src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1704246039/IMG_2043_pfryiy.jpg " alt="" />
          <h1>Líneas de trabajo</h1>
          <div className='containers-lineas'>
          <div className='talleres-container'>
            <h2>Talleres formativos</h2>
            <p>Ofrecemos una amplia gama de talleres formativos, que abarcan disciplinas como danza, circo, canto, graffiti y otras expresiones artísticas, proporcionando oportunidades valiosas para el desarrollo creativo y personal de los participantes. </p>
          </div>
          <div className='eventos-container'>
            <h2>Eventos culturales</h2>
            <p>Realizamos una gran variedad de eventos. Desde experiencias musicales y recreativas hasta expresiones artísticas, cine y deportes. 
              <br />
              Nos dedicamos a fomentar y visibilizar la riqueza cultural de nuestro territorio.</p>
          </div>
          <div className='proyectos-container'>
            <h2>Proyectos específicos</h2>
            <p>Desde el Barrio impulsa proyectos con un impacto tangible. Trabajamos proyectos educativos, ambientales, deportivos, sobre género y sexualidad.
              <br /> 
              Aportando a la comunidad diversos saberes y espacios para el desarrollo integro. </p>
          </div>
          </div>
          </div>
          <div className='links-container'>
            <div className='link-novedades'>
              <a href="Novedades">
                <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1704250728/Group_13_d13qpk.png" alt="" />
              </a>
            </div>
            <div className='link-historia'>
              <a href="Historia">
                <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1704250728/Group_14_fijwvu.png" alt="" />
              </a>
            </div>
            <div className='link-apoyanos'>
              <a href="Apoyanos">
                <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1704250728/Group_15_bgba6q.png" alt="" />
              </a>
            </div>
          </div>
          
          
        </div>

           
        
    )
}

export default Home;

