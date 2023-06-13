import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }){
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [id, setId] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          postFetch('media_contents', {name: name, year: year, director_id: id})
            .then((response) => {
              setName('');
              setYear('');
              setId('');
              setMessage('Creado correctamente');
              setRefresh(true)
            })
    
        }catch (error) {
          console.log(error)
        }
      }
return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            placeholder='Nombre de la pelicula'
            onChange={(e) => { setName(e.target.value); }} />
        </div>
        <div>
          <input
            type='text'
            value={year}
            placeholder='Año de la pelicula'
            onChange={(e) => { setYear(e.target.value); }} />
        </div>
        <div>
          <input
            type='text'
            value={id}
            placeholder='Identificador del director'
            onChange={(e) => { setId(e.target.value); }} />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type='submit'>Crear</button>

      </form>
    </>
)}

export default New;