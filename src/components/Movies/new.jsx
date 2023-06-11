import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [idDirector, setIdDirector] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('movies', { name: name, year: year, director_id: idDirector })
        .then(() => {
          setName('');
          setYear('');
          setMessage('Pelicula creada correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#643843', color: '#E7CBCB', marginTop: '20px'}}>
      <form onSubmit={handleSubmit}>
        <h2 style={{marginBottom: '10px'}}>Crear película</h2>
        <div style={{marginBottom: '10px'}}>
          <input
            type='numeric'
            value={idDirector}
            placeholder='Id del director'
            onChange={(e) => {setIdDirector(e.target.value)}}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div style={{marginBottom: '10px'}}>
          <input
            type='text'
            value={name}
            placeholder='Película'
            onChange={(e) => {setName(e.target.value)}}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div style={{marginBottom: '10px'}}>
          <input
            type='numeric'
            value={year}
            placeholder='Año'
            onChange={(e) => {setYear(e.target.value)}}
            style={{padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button type='submit' style={{padding: '10px 20px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#E7CBCB', color: '#643843', cursor: 'pointer'}}>Crear</button>
        </div>
      </form>
    </div>
  );
}

export default New;
