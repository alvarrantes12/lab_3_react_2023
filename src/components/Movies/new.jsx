import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import './new.css';

function New ( {setRefresh} ) {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [message, setMessage] = useState('')
  const [idDirector, setIdDirector] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('movies', {name: name, year: year, director_id: idDirector})
        .then((response) => {
          setName('');
          setYear('');
          setIdDirector('');
          setMessage('Pelicula registrada');
          setRefresh(true)
        })

    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="new-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={idDirector}
            placeholder='Identificador del director'
            onChange={(e) => { setIdDirector(e.target.value); }} />
        </div>

        <div>
          <input
            type='text'
            value={name}
            placeholder='Nombre de la pelicula'
            onChange={(e) => { setName(e.target.value); }} />
        </div>
        <div>
          <input
            type='numeric'
            value={year}
            placeholder='Año de lanzamiento'
            onChange={(e) => { setYear(e.target.value); }} />
        </div>
        
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type='submit'>Crear</button>
      </form>
    </div>
  )
}

export default New;