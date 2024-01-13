import React, { useState } from 'react';
import './Apoyanos.scss';
import Swal from 'sweetalert2';
import dinero from "../../images/dinero.jpg";
import juguetes from "../../images/juguetes.jpg";
import libros from "../../images/libros.jpg";

const Apoyanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    areasInteres: '',
    disponibilidad: '',
    mensaje: ''
  });

  const [libroData, setLibroData] = useState({
    titulo: ''
  });

  const [jugueteData, setJugueteData] = useState({
    descripcion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLibroInputChange = (e) => {
    const { name, value } = e.target;
    setLibroData({
      ...libroData,
      [name]: value
    });
  };

  const handleJugueteInputChange = (e) => {
    const { name, value } = e.target;
    setJugueteData({
      ...jugueteData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://dbvoluntarios.onrender.com/voluntarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Éxito:', data);
        showSuccessAlert();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleLibroSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dbvoluntarios.onrender.com/libros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titulo: libroData.titulo }),
      });

      if (response.ok) {
        showDonationSuccessAlert('Libro');
        setLibroData({
          titulo: ''
        });
      } else {
        throw new Error('Error al registrar el libro');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleJugueteSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dbvoluntarios.onrender.com/juguetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ descripcion: jugueteData.descripcion }),
      });

      if (response.ok) {
        showDonationSuccessAlert('Juguete');
        setJugueteData({
          descripcion: ''
        });
      } else {
        throw new Error('Error al registrar el juguete');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Registro Exitoso',
      text: 'Te has registrado correctamente. Pronto nos pondremos en contacto contigo.',
      icon: 'success',
      customClass: {
        confirmButton: 'swal-confirm-button-class',
      },
    }).then(() => {
      window.location.reload();
    });
  };

  const showDonationSuccessAlert = (tipoDonacion) => {
    Swal.fire({
      title: `${tipoDonacion} Registrado`,
      html: `El ${tipoDonacion.toLowerCase()} ha sido registrado con éxito. ¡Gracias!<br/><br/>Puedes acercarte o enviarlo a la corporación en la siguiente dirección:<br/>CRA 20 #35-50`,
      icon: 'success',
      customClass: {
        confirmButton: 'swal-confirm-button-class',
      },
    });
  };

  return (
    <div>
      <div className="container">
        <h2>Únete como Voluntario</h2>
        <section className="voluntario-section">
          <form onSubmit={handleSubmit} className="voluntario-form">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} required />
            <label htmlFor="areas-interes">Áreas de Interés:</label>
            <textarea id="areas-interes" name="areasInteres" value={formData.areasInteres} onChange={handleInputChange}></textarea>
            <label htmlFor="disponibilidad">Disponibilidad de Tiempo:</label>
            <input type="text" id="disponibilidad" name="disponibilidad" value={formData.disponibilidad} onChange={handleInputChange} />
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange}></textarea>
            <button type="submit">Unirse como Voluntario</button>
          </form>
        </section>
        <hr />
        <section className="donacion-section">
          <h2>Realiza tu Donación</h2>
          <div className="donacion-options">
            <div className="donacion-option">
              <img src={libros} alt="Libros" />
              <h3>Donación de Libros</h3>
              <form onSubmit={handleLibroSubmit} className="donacion-form">
                <label htmlFor="libro-titulo">Título del Libro:</label>
                <input type="text" id="libro-titulo" name="titulo" value={libroData.titulo} onChange={handleLibroInputChange} required />
                <button type="submit">Donar</button>
              </form>
            </div>
            <div className="donacion-option">
              <img src={juguetes} alt="Juguetes" />
              <h3>Donación de Juguetes</h3>
              <form onSubmit={handleJugueteSubmit} className="donacion-form">
                <label htmlFor="juguetes-descripcion">Descripción del Juguete:</label>
                <textarea id="juguetes-descripcion" name="descripcion" value={jugueteData.descripcion} onChange={handleJugueteInputChange} required></textarea>
                <button type="submit">Donar</button>
              </form>
            </div>
            <div className="donacion-option">
              <img src={dinero} alt="Dinero" />
              <h3>Donación de Dinero</h3>
              <form action="#" method="post" className="donacion-form">
                {/* DINERO */}
                <form id="frm_ePaycoCheckoutOpen" 
              name="frm_ePaycoCheckoutOpen" 
              method="POST" 
              action="https://secure.payco.co/checkoutopen.php">
            
              <input name="p_cust_id_cliente" type="hidden" value="1359395"/>
              <input name="p_key" type="hidden" value="675f910503f7dd39a6c999a37e7d8e7afb315404"/>
              <input name="p_id_factura" type="hidden" value=""/>
              <input name="p_description" type="hidden" value="Donaciones"/>
              <input name="p_detalle" type="hidden" value=""/>
              <input name="p_referencia" type="hidden" value=""/>
              <input name="p_test_request" type="hidden" value="false"/>
              <input name="p_url_respuesta" type="hidden" value=""/>
              <input name="p_url_confirmacion" type="hidden" value=""/>
              <input type="image" id="imagen" src="https://multimedia.epayco.co/dashboard/btns/btn5.png" alt=""/>
              <input type="hidden" id="idboton" name="idboton" value="60844"/>
                                
        </form>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Apoyanos;
