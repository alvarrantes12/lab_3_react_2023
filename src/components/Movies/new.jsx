import React, { useState} from 'react';
import { postFetch} from '../../commons/ApiMethods';


function New ({setRefresh}){
 const [newName, setName] = useState('')
 const [year, setYear] = useState('')
 const [directorId, setdirectorId] = useState('')
 const [message, setMessage] = useState('')
  
 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('movies', {name: newName, year: year,director_id: directorId})
       .then((response) => {
          setName('');
          setYear('');
          setdirectorId('');
          setMessage('Creado correctamente');
          setRefresh(true)
      })
    } catch (error){
      console.log(error)
    }
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
        <div>
        <br />
        <input 
          type='text'
          value = {newName}
          placeholder=' Nombre Pelicula '
          onChange={(e) => {setName(e.target.value);}} />
        </div>

        <div>
        <input 
          type= 'number'
          value = {year}
          placeholder='Año'
          onChange={(e) => {setYear(e.target.value);}} />
        </div>

        <div>
        <input 
          type='number'
          value = {directorId}
          placeholder='Id del director'
          onChange={(e) => {setdirectorId(e.target.value);}} />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type ='submit' style={{ backgroundColor: 'black', color: 'white' }}> Crear </button>
      </form>
    </>
  )
}

export default New;