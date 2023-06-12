import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New ({ setRefresh }) {
    const [movieName, setMovieName] = useState('');
    const [year, setYear] = useState('');
    const [directorId, setDirectorId] = useState('');
    const [messages, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          postFetch('movies', {movie_name: movieName, year: year, director_id: directorId })
          .then((response) => {
            setMovieName('');
            setYear('');
            setDirectorId('');
            setMessage('Creado correctamente');
            setRefresh(true);
          })
    
        } catch (err) {
          console.log(err);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={movieName} placeholder='Nombre de la película' onChange={(e) => {setMovieName(e.target.value); }} />
                </div>
                <div>
                    <input type="text" value={year} placeholder='Año de publicación' onChange={(e) => { setYear(e.target.value); }} />
                </div>
                <div>
                    <input type="text" value={directorId} placeholder='ID del director' onChange={(e) => { setDirectorId(e.target.value); }} />
                </div>
                <div>{messages ? <p>{messages}</p> : <br />}</div>
                <button type='submit'>Crear Película</button>
            </form>
        </div>
    )
}

export default New;