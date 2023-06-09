import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete({ setRefresh }) {

  const [idDelete, setIdDelete] = useState('');
  const [messageDelete, setMessageDelete] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`movies/${idDelete}`)
        .then(() => {
          setIdDelete('')
          setMessageDelete('Eliminado Correctamente')
          setRefresh(true);
        })
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="Background1">
      <form onSubmit={handleDelete}>
        <div>
          <h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Eliminar Pelicula</h4>
          <input
            type="text"
            value={idDelete}
            placeholder="Id de la pelicula"
            onChange={(e) => { setIdDelete(e.target.value) }} />
        </div>
        <button type="submit">Eliminar</button>
        <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
      </form>
    </div>
  )
}
export default Delete;