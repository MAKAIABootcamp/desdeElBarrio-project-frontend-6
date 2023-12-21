import React from 'react';
import './Apoyanos.scss';
import dinero from "../../images/dinero.jpg";
import juguetes from "../../images/juguetes.jpg";
import libros from "../../images/libros.jpg";

const Apoyanos = () => {
    
    
      return (
        <div>

        <div className="container">
          <h2>Únete como Voluntario</h2>
          <section className="voluntario-section">
            <form action="#" method="post" className="voluntario-form">
              {/* Formulario voluntarios */}
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" required />
              <label htmlFor="areas-interes">Áreas de Interés:</label>
              <textarea id="areas-interes" name="areas_interes"></textarea>
              <label htmlFor="disponibilidad">Disponibilidad de Tiempo:</label>
              <input type="text" id="disponibilidad" name="disponibilidad" />
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje"></textarea>
              <button type="submit">Unirse como Voluntario</button>
            </form>
          </section>
          <hr />
          <section className="donacion-section">
            <h2>Realiza tu Donación</h2>
            <div className="donacion-options">
              <div className="donacion-option">
              <img src={libros}  />
                <h3>Donación de Libros</h3>
                <form action="#" method="post" className="donacion-form">
                  {/* LIBROS */}
                  <label htmlFor="libro-titulo">Título del Libro:</label>
                  <input type="text" id="libro-titulo" name="libro_titulo" required />
                  <button type="submit">Donar</button>
                </form>
              </div>
              <div className="donacion-option">
              <img src={juguetes}  />
                <h3>Donación de Juguetes</h3>
                <form action="#" method="post" className="donacion-form">
                  {/* JUGUETES */}
                  <label htmlFor="juguetes-descripcion">Descripción del Juguete:</label>
                  <textarea id="juguetes-descripcion" name="juguetes_descripcion" required></textarea>
                  <button type="submit">Donar</button>
                </form>
              </div>
              <div className="donacion-option">
              <img src={dinero}  />
             
                <h3>Donación de Dinero</h3>
                <form action="#" method="post" className="donacion-form">
                  {/* DINERO */}
                  <label htmlFor="cantidad-dinero">Cantidad a Donar:</label>
                  <input type="number" id="cantidad-dinero" name="cantidad_dinero" required />
                  <label htmlFor="metodo-pago">Método de Pago:</label>
                  <select id="metodo-pago" name="metodo_pago" required>
                    <option value="tarjeta">Tarjeta de Crédito</option>
                    <option value="transferencia">Transferencia Bancaria</option>
                  </select>
                  <button type="submit">Donar</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
    

export default Apoyanos;