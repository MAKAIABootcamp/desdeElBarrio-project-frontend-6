import React from 'react';
import './AdminPanel.scss';
import DonacionesComponent from './DonacionesComponent';
import VoluntariosComponent from './VoluntariosComponent';

const AdminPanel = () => {
  return (
    <div className="container">
      <header>
        <h1>Panel de Administración</h1>
      </header>
      <section className="admin-section">
        <DonacionesComponent />
        <VoluntariosComponent />
      </section>
    </div>
  );
};

export default AdminPanel;
