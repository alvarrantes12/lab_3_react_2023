import React, { useState} from 'react';
import {  deleteFetch } from '../../commons/ApiMethods';

function Delete ({setRefresh}) {
    const [idDelete, setIdDelete] = useState('');
    const [messageDelete, setMessageDelete] = useState('');

    const handleDelete = async (event) => {
        event.preventDefault();
        try{

            deleteFetch(`movies/${idDelete}`)
            .then(() => {
              setIdDelete('');
              setMessageDelete('Eliminado');
              console.log('Eliminado')
              setRefresh(true);
            })

        }catch(error) {
            setMessageDelete(error);
          console.log(error)
        }
    }
    return (
        <form onSubmit={handleDelete}>
        <div>
        <input 
          type='text'
          value={idDelete}
          placeholder='Número de ID'
          onChange={(e) => {setIdDelete(e.target.value);}} />
        </div>

        {messageDelete ? 
            (<> <p>{messageDelete}</p><button type='submit'>Eliminar</button></>) : 
            (<button type='submit'>Eliminar</button>)}

        
      </form>
    );
}

export default Delete;