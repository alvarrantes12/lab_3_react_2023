import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

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
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
                <h2>Crear pelicula</h2>
                <div>
                    <input
                        type='numeric'
                        value={idDirector}
                        placeholder='Id del director'
                        onChange={(e) => { setIdDirector(e.target.value) }} />
                </div>
                <div style={{marginTop: '5px'}}>
                    <input
                        type='text'
                        value={name}
                        placeholder='Nombre de la pelicula'
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div style={{marginTop: '5px'}}>
                    <input
                        type='numeric'
                        value={year}
                        placeholder='Año de la pelicula'
                        onChange={(e) => { setYear(e.target.value) }} />
                </div>
                <div>{message ? <p>{message}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                }}>Crear</button>
                <Link to="/" style={{ marginLeft: '10px' }}>
                    <button style={{
                        backgroundColor: '#f44336',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                      }}>Volver</button>
                </Link>
            </form>
        </div>
    )
}

export default New;