import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import './movies.css';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Edit() {
  const [nameEdit, setNameEdit] = useState('');
  const [year_publicationEdit, setYear_publicationEdit] = useState('');
  const [director_idEdit, setDirector_idEdit] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`movies/${id}`, { name: nameEdit, year_publication: year_publicationEdit, director_id: director_idEdit }).then(() => {
        showSuccessAlert();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Editado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <>
      <form onSubmit={handleEdit} className="centered-form">
        <div className="mb-3">
        <label htmlFor="movieName" className="form-label">Nombre de la película</label>
        <input
          type="text"
          className="form-control"
          id="movieName"
          value={nameEdit}
          onChange={(e) => setNameEdit(e.target.value)}
        />
        </div>
        <div className="mb-3">
          <label htmlFor="yearPublication" className="form-label">Año de publicación</label>
          <input
            type="text"
            className="form-control"
            id="yearPublication"
            value={year_publicationEdit}
            onChange={(e) => setYear_publicationEdit(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="directorId" className="form-label">Id del director</label>
          <input
            type="text"
            className="form-control"
            id="directorId"
            value={director_idEdit}
            onChange={(e) => setDirector_idEdit(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <div className="btn-container">
            <Link to={`/`} className="btn btn-success btn-sm create-button">Volver</Link>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary create-button">Editar</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Edit;
