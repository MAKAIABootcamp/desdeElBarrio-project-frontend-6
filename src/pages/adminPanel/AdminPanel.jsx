import React from 'react';
import './AdminPanel.scss';
import DonacionesComponent from './DonacionesComponent';
import VoluntariosComponent from './VoluntariosComponent';
import AddCards from '../../components/AdminForm/AddCards';

const AdminPanel = () => {
  return (
    <div className="container">
      <header>
        <h1>Panel de Administración</h1>
      </header>
      <section className="admin-section">
        <DonacionesComponent />
        <VoluntariosComponent />
        <AddCards/>
      </section>
    </div>
  );
};

export default AdminPanel;
