import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
    const [name, setName] = useState('');
    const [yearOfPublication, setYearOfPublication] = useState('');
    const [idDirector, setIdDirector] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await postFetch('movies', { name: name, year_of_publication: yearOfPublication, director_id: idDirector })
                .then(() => {
                    setName('');
                    setYearOfPublication('');
                    setIdDirector('');
                    setMessage('¡Creada exitosamente!');
                    setRefresh(true);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        value={name}
                        placeholder='Nombre de la película'
                        onChange={(e) => { setName(e.target.value); }}
                    />
                </div>

                <div>
                    <input
                        type='text'
                        value={yearOfPublication}
                        placeholder='Año de publicación'
                        onChange={(e) => { setYearOfPublication(e.target.value); }}
                    />
                </div>

                <div>
                    <input
                        type='numeric'
                        value={idDirector}
                        placeholder='ID del director'
                        onChange={(e) => { setIdDirector(e.target.value); }}
                    />
                </div>

                <div>{message ? <p>{message}</p> : <br />}</div>

                <div>
                    <button type='submit'>Crear</button>
                </div>

            </form>
        </div>
    );
}

export default New;