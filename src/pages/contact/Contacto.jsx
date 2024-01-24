import React, { useState } from "react";
import "./Style.scss"
import ViewMap from "../../components/Gmaps/ViewMap";

export const Contacto = () => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value
    });
  };



  return (
    <div className="seccion-contacto-wrapper">
      <div className="seccion-contact-wrapper-frame">
        <div className="seccion-contacto-text">
          <h1>Informacion de contacto</h1>
          <div className="seccion-contact-text2">
            <p className="contact-p">
              ¿Inquietudes? No dude en contactarnos. Nuestros asesores están a su disposición ante cualquier sugerencia.{" "}
              <br />
              Puede hacerlo por cualquiera de los siguientes canales
            </p>
          </div>
        </div>
        <div className="seccion-contact-form">
          <section className="contactForm">
            <form className="contactData" >
              <label htmlFor="nameF" className="text-wrapper-name">Nombre:</label>
              <input type="text" id="nameF" name="nameF" value={formInfo.name} onChange={handleChangeInput} required />

              <label htmlFor="lastName" className="text-wrapper-lastName">Apellido:</label>
              <input type="text" id="lastName" name="lastName" value={formInfo.lastName} onChange={handleChangeInput} required />

              <label htmlFor="correo" className="text-wrapper-correo">Correo:</label>
              <input type="text" id="correo" name="correo" value={formInfo.lastName} onChange={handleChangeInput} required />

              <label htmlFor="telefono" className="text-wrapper-telefono">Telefono:</label>
              <input type="text" id="telefono" name="telefono" value={formInfo.lastName} onChange={handleChangeInput} required />

              <label htmlFor="mensaje" className="text-wrapper-mensaje">Mensaje:</label>
              <textarea type="text" id="mensaje" name="mensaje" value={formInfo.lastName} onChange={handleChangeInput} required />

              <button className="btnEnviar" type="submit">Enviar</button>

            </form>
          </section>

          <section className="contactLocation">
            <div className="contactMap">
              <ViewMap />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Contacto