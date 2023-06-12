import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete ({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('');
    const [messageDelete, setMessageDelete] = useState('');

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
          deleteFetch(`movies/${idDelete}`)
            .then(() => {
              setIdDelete('');
              setMessageDelete('Eliminado correctamente');
              setRefresh(true);
            });
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleDelete}>
                <div>
                    <input type="text" value={idDelete} placeholder='ID Película' onChange={(e) => {setIdDelete(e.target.value); }} />
                </div>
                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <button type='submit'>Eliminar Película</button>
            </form>
        </div>
    )
}

export default Delete;