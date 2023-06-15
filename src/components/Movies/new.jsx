import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [directorId, setDirectorId] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            postFetch('movies', {name: name, year: year, director_id: directorId})
            .then((response) => {
                setName('');
                setYear('');
                setDirectorId('');
                setMessage('Creado correctamente')
                setRefresh(true);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    type='text'
                    value={name}
                    placeholder='Nombre de la pelìcula'
                    onChange={(e) => { setName(e.target.value); }} />
                </div>
                <div>
                    <input
                    type='text'
                    value={year}
                    placeholder='Año'
                    onChange={(e) => { setYear(e.target.value); }} />
                </div>
                <div>
                    <input
                    type='text'
                    value={directorId}
                    placeholder='ID del director'
                    onChange={(e) => { setDirectorId(e.target.value); }} />
                </div>
                <div>{message ? <p>{message}</p> : <br />}</div>
                <button type='submit'>Crear</button>
            </form>
        </>
    )
}

export default New;