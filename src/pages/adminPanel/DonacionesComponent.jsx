import React, { useState, useEffect } from 'react';
import './AdminPanel.scss'; 

const DonacionesComponent = () => {
  const [juguetes, setJuguetes] = useState([]);
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchJuguetes = fetch('https://dbvoluntarios.onrender.com/juguetes').then(response => response.json());
    const fetchLibros = fetch('https://dbvoluntarios.onrender.com/libros').then(response => response.json());

    Promise.all([fetchJuguetes, fetchLibros])
      .then(([juguetesData, librosData]) => {
        setJuguetes(juguetesData);
        setLibros(librosData);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className="admin-item">
      <h2>Donaciones de Juguetes</h2>
      <ul>
        {juguetes.map((donacion, index) => (
          <li key={index}>
            {donacion.descripcion} ID:{donacion.id}
          </li>
        ))}
      </ul>

      <h2>Donaciones de Libros</h2>
      <ul>
        {libros.map((donacion, index) => (
          <li key={index}>
            Título: {donacion.titulo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DonacionesComponent;