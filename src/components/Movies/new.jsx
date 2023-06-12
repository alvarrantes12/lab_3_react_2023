import React, { useState} from 'react';
import {  postFetch } from '../../commons/ApiMethods';


function New ({setRefresh}) {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [id_director, setIdDirector] = useState('');
    const [message, setMesage] = useState('');
  
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        postFetch('movies', {name: name, year: year, director_id: 1})
        .then((response) => {
          setName('');
          setYear('');
          setIdDirector('');
          setMesage('Creado correctamente');
          setRefresh(true);
        })
      }catch (error) {
        console.log(error)
  
      }
    }
  
    return (
        <>
        <div style={{ marginBottom: '20px' }}></div> {/* Espaciado */}
            <form onSubmit={handleSubmit} >
            <div>
            <input 
                type='text'
                value={name}
                placeholder='Nombre de la pelicula'
                onChange={(e) => {setName(e.target.value);}} />
            </div>
        
            <div>
            <input 
                type='text'
                value={year}
                placeholder='Año de la pelicula'
                onChange={(e) => {setYear(e.target.value);}} />
            </div>

            <div>
            <input 
                type='text'
                value={id_director}
                placeholder='id del director'
                onChange={(e) => {setIdDirector(e.target.value);}} />
            </div>

            {message ? 
            (<> <p>{message}</p><button type='submit'>Crear</button></>) : 
            (<button type='submit'>Crear</button>)}
            
            
            </form>
        </>
      
    )
  
  }
  
  export default New;