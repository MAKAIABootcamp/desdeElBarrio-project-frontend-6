import React, { useState, useEffect } from 'react';
import './AdminPanel.scss'; 

const VoluntariosComponent = () => {
  const [voluntarios, setVoluntarios] = useState([]);

  useEffect(() => {
    fetch('https://dbvoluntarios.onrender.com/voluntarios')
      .then(response => response.json())
      .then(data => setVoluntarios(data));
  }, []);

  return (
    <section className="admin-item">
      <h2>Voluntarios Registrados</h2>
      <ul>
        {voluntarios.map((voluntario, index) => (
          <li key={index}>
            ID: {voluntario.id} <br />
            Nombre: {voluntario.nombre} <br />
            Email: {voluntario.email} <br />
            Teléfono: {voluntario.telefono} <br />
            Áreas de Interés: {voluntario.areasInteres} <br />
            Disponibilidad de Tiempo: {voluntario.disponibilidad} <br />
            Mensaje: {voluntario.mensaje} <br />
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VoluntariosComponent;