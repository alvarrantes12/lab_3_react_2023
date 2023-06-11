import React, { useState} from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete ({setRefresh}){
 const[idDelete, setIdDelete] = useState('')
 const [messageDelete, setMessageDelete] = useState('')
  
    const handleDelete = async (event) => {
      event.preventDefault();
      try{
        deleteFetch(`movies/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessageDelete('Se ha eliminado correctamente');
          setRefresh(true);
        })
      } catch(error){
        console.log(error)
    }
    }

    return(
        <>
        <form onSubmit={handleDelete}>
        <br />
        <div>
        <input 
          type='text'
          value = {idDelete}
          placeholder='Id'
          onChange={(e) => {setIdDelete(e.target.value);}} />
        </div>
        <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
        <button type ='submit' style={{ backgroundColor: 'black', color: 'white' }}> Eliminar </button>
      </form>
        </>
    )
   
}

export default Delete;