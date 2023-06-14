import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import './movies.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function New() {
  const [name, setName] = useState('');
  const [yearPublication, setYearPublication] = useState('');
  const [directorId, setDirectorId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('movies', { name: name, year_publication: yearPublication, director_id: directorId }).then(() => {
        showSuccessAlert();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Creado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="centered-form">
        <div className="mb-3">
          <label htmlFor="movieName" className="form-label">Nombre de la película</label>
          <input
            type="text"
            className="form-control"
            id="movieName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="yearPublication" className="form-label">Año de publicación</label>
          <input
            type="text"
            className="form-control"
            id="yearPublication"
            value={yearPublication}
            onChange={(e) => setYearPublication(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="directorId" className="form-label">Id del director</label>
          <input
            type="text"
            className="form-control"
            id="directorId"
            value={directorId}
            onChange={(e) => setDirectorId(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <div className="btn-container">
            <Link to={`/`} className="btn btn-success btn-sm create-button">Volver</Link>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-danger create-button">Crear</button>
          </div>
        </div>


      </form>
    </>
  )
}

export default New;
