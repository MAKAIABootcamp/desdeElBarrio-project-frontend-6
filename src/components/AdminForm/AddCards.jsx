import React, { useState } from 'react';
import './Styles.scss';
import { createCollections } from '../../firebase/firestoreCards.config';
import { uploadFile } from '../../firebase/firebase.config'; // Asumiendo que también tienes configurado el almacenamiento en Firebase

const AddCards = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      console.log(result)
    } catch (error) {
      console.error(error)
    }
    console.log(file)

    try {
      const imageUrl = await uploadFile(file);
      console.log(imageUrl)
      // Llamar a la función para crear colecciones
      await createCollections(title, date, type, imageUrl)

      // Determinar la colección en Firestore basada en el tipo seleccionado
      let collectionName = '';
      if (type === 'evento') {
        collectionName = 'Events';
      } else if (type === 'noticia') {
        collectionName = 'News';
      } else if (type === 'taller') {
        collectionName = 'Workshops';
      }

      // Aquí podrías agregar la card a la colección correspondiente en Firestore
      // Por ahora, solo imprimimos los datos en la consola
      console.log('Tipo de Card:', type);
      console.log('Título:', title);
      console.log('Fecha:', date);
      /* console.log('URL de la imagen:', imageUrl); */

      // Limpiar los campos después de enviar
      setTitle('');
      setDate('');
      setFile(null);
      setType('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="card-form">
      <h2>Agregar Card</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <textarea
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="date">Fecha:</label>
        <input
          id="date"
          name="date"
          value={date}
          onChange={(e) => setInfo(e.target.value)}
        ></input>

        <label htmlFor="type">Tipo de Card:</label>
        <select
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="">Seleccione el tipo de card</option>
          <option value="evento">Evento</option>
          <option value="noticia">Noticia</option>
          <option value="taller">Taller</option>
        </select>

        <label htmlFor="image">Imagen:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={e => setFile(e.target.files[0])}
          required
        />

        <button type="submit">Agregar Card</button>
      </form>
    </div>
  );
};

export default AddCards;
