import React from 'react'
import  "./Style.scss"
const Footer = () => {
  return (
    <div className='footer-container'>
            <div className='logos-contact'>
            <div className='logos'>
              <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703312802/WhatsApp_Image_2023-12-11_at_11.33.26_PM_1_hkwflz.jpg" alt="" />
              <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703313317/WhatsApp_Image_2023-12-11_at_11.33.28_PM_oc6r8h.jpg" alt="" />
            </div>
            <div className='contact'>
              <div className='phone'>
                <h3>Teléfono</h3>
                <h4>300 222 90 90</h4>
              </div>
              <div className='media'>
                <h3>Redes sociales</h3>
                <a href="https://www.instagram.com/desdeelbarriodb/">
                <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1697320240/Frame_2_nvbxom.png" alt="" />
                </a>
                <a href="https://www.facebook.com/desdeelbarriodb">
                <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1697320241/Frame_cdypsz.png" alt="" />
                </a>
              </div>
              <div className='email'>
                <h3>Correo</h3>
                <h4>desdeelbarriocol@gmail.com</h4>
              </div>
              </div>
            </div>
            <div className='derechos'>Copyright corporación Desde el Barrio 2023 | Aviso legal | Terminos y condiciones</div>
          </div>
  )
}

export default Footer