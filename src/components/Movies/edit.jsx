import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {

    const [nameEdit, setNameEdit] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [messageEdit, setMessageEdit] = useState('');

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
          putFetch(`movies/${idEdit}`, { name: nameEdit})
            .then(() =>  {
              setNameEdit('');
              setIdEdit('');
              setMessageEdit('Editado correctamente');
              setRefresh(true);
            });
        }
        catch (error) {
          console.log(error)
        }
      }

      return (
        <div className='Background2'>
        
      <form onSubmit={handleEdit}>
        <div>
        <h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Editar Pelicula</h4>
          <input
            type="text"
            value={idEdit}
            placeholder="Id de la pelicula"
            onChange={(e) => { setIdEdit(e.target.value) }} />
        </div>
        <div>
          <input
            type="text"
            value={nameEdit}
            placeholder="Nuevo nombre de la pelicula"
            onChange={(e) => { setNameEdit(e.target.value) }} />
        </div>
        <button type="submit">Editar</button>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
      </form>     
        </div>
      )
}
export default Edit;