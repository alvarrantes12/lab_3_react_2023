import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import './edit.css';


function Edit({ setRefresh }) {
  const [idEdit, setIdEdit] = useState('')
  const [nameEdit, setNameEdit] = useState('')
  const [messageEdit, setMessageEdit] = useState('')

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`movies/${idEdit}`, { name: nameEdit })
        .then(() => {
          setIdEdit('');
          setNameEdit('');
          setMessageEdit('Se a editado el nombre');
          setRefresh(true);
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="edit-form">
      <form onSubmit={handleEdit}>
        <div>
          <input
            type='text'
            value={idEdit}
            placeholder='Número de identificador'
            onChange={(e) => { setIdEdit(e.target.value); }} />
        </div>
        <div>
          <input
            type='text'
            value={nameEdit}
            placeholder='Nuevo nombre para la pelicula'
            onChange={(e) => { setNameEdit(e.target.value); }} />
        </div>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <button type='submit'>Editar</button>
      </form>
    </div>
  )
  
}

export default Edit;