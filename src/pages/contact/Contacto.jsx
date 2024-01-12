import React from "react";
import "./Style.scss"

export const Contacto = () => {
  return (
    <div className="seccin-contacto">
      <div className="div">
        <img className="image" alt="Image" src="image-120.png" />
        <div className="text-wrapper">Inicio</div>
        <div className="group">
          <p className="copyright">
            copyright corporacion desde eil barrio 2023&nbsp;&nbsp;aviso legal&nbsp;&nbsp;terminos y condiciones
          </p>
          <img className="img" alt="Image" src="image-184.png" />
          <img className="image-2" alt="Image" src="image-188.png" />
          <div className="peces-soctales">Redes sociales</div>
          <div className="jeetono">Telefono</div>
          <div className="text-wrapper-2">correo</div>
        </div>
        <img className="image-3" alt="Image" src="image-153.png" />
        <div className="text-wrapper-3">Historia</div>
        <div className="container">
          <div className="apoyanos">Apoyános</div>
        </div>
        <div className="text-wrapper-4">Novedades</div>
        <div className="frame">
          <div className="overlap-group">
            <div className="noticias">Información de Contacto</div>
            <div className="telefono">Apellido</div>
            <div className="text-wrapper-5">Nombre</div>
            <button className="button">
              <div className="btn-enviar">Enviar</div>
            </button>
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <img className="rectangle-5" alt="Rectangle" src="rectangle-10.svg" />
            <div className="nombre">Correo</div>
            <div className="nombre-2">Mensaje</div>
            <div className="nombre-3">Teléfono</div>
            <p className="p">
              ¿Inquietudes? No dude en contactarnos. Nuestros asesores están a su disposición ante cualquier sugerencia.{" "}
              <br />
              Puede hacerlo por cualquiera de los siguientes canales
            </p>
            <div className="image-wrapper">
              <img className="image-4" alt="Image" src="image-6.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto