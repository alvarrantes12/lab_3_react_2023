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
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button type='submit' style={{ marginBottom: "1em", padding: "0.5em 1em", fontSize: "1em", backgroundColor: "lightgreen", border: "none", borderRadius: "4px", cursor: "pointer" }}>Crear</button>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={movieName} placeholder='Nombre (Peli)' onChange={(e) => { setMovieName(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={year} placeholder='Año (Peli)' onChange={(e) => { setYear(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={directorId} placeholder='ID (Director)' onChange={(e) => { setDirectorId(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div>{messages ? <p>{messages}</p> : <br />}</div>
            </form>
        </div>
    )
}

export default New;