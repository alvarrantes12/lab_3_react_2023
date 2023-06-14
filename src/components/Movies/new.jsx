import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [director_id, setDirector_id] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('movies', {name: name,
                           year: year,
                           director_id: director_id})
        .then((response) => {
          setName('');
          setYear('');
          setMessage('Creado correctamente');
          setRefresh(true);
      });
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <h4 style={{ marginBottom: '0px', marginTop: '0px' }}>Crear Pelicula</h4>
          <input
            type='text'
            value={name}
            placeholder='Nombre Pelicula'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type='text'
            value={year}
            placeholder='Año de publicacion'
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            value={director_id}
            placeholder="Id del director"
            onChange={(e) => { 
              setDirector_id(e.target.value) }} 
              />
        </div>

        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type='submit'> Crear </button>
      </form>
    </>
  );
}

export default New;
