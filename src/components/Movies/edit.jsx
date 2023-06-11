import React, { useState} from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({setRefresh}){
 const [nameEdit, setNameEdit] = useState('')
 const [idEdit, setIdEdit] = useState('')
 const [messageEdit, setMessageEdit] = useState('')

 const handleEdit = async (event) => {
    event.preventDefault();
    try{
      putFetch(`movies/${idEdit}`, { name: nameEdit})
      .then(() => {
        setNameEdit('');
        setIdEdit('');
        setMessageEdit('Se ha editado correctamente');
        setRefresh(true);
      })
    } catch(error){
      console.log(error)
  }
  }

 return (
   <>
    <form onSubmit={handleEdit}>
        <div>
        <br />
        <input 
          type='text'
          value = {idEdit}
          placeholder='Id'
          onChange={(e) => {setIdEdit(e.target.value);}} />
        </div>

        <div>
        <input 
          type='text'
          value = {nameEdit}
          placeholder='Nuevo nombre'
          onChange={(e) => {setNameEdit(e.target.value);}} />
        </div>

        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <button type ='submit' style={{ backgroundColor: 'black', color: 'white' }}> Editar </button>
      </form>
   </>
 )
}

export default Edit;