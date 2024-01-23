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
            <div className="btnSubmit">
              <button className="btnEnviar" type="submit">Enviar</button>
            </div>
          </form>
        </section>

        <section className="contactLocation">
          <div className="contactMap">
            <ViewMap />
          </div>
        </section>

      </div>

    </div>
  );
};

export default Contacto