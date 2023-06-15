import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function New({ setRefresh }) {
    const [movie_name, setMovie_name] = useState('');
    const [movie_year, setMovie_year] = useState('');
    const [idDirector, setIdDirector] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            postFetch('movies', { movie_name: movie_name, movie_year: movie_year, director_id: idDirector })
                .then(() => {
                    setMovie_name('');
                    setMovie_year('');
                    setMessage('Se creó correctamente');
                    setRefresh(true);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='numeric'
                        value={idDirector}
                        placeholder='ID del director'
                        onChange={(e) => { setIdDirector(e.target.value); }}
                        style={{
                            padding: '0.5em',
                            fontSize: '16px',
                            border: '1px solid lightgray',
                            borderRadius: '4px',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            boxSizing: 'border-box',
                            marginTop: '10px'
                        }}
                    />
                </div>

                <div>
                    <input
                        type='text'
                        value={movie_name}
                        placeholder='Nombre de la pelicula'
                        onChange={(e) => { setMovie_name(e.target.value); }}
                        style={{
                            padding: '0.5em',
                            fontSize: '16px',
                            border: '1px solid lightgray',
                            borderRadius: '4px',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            boxSizing: 'border-box',
                            marginTop: '10px'
                        }}
                    />
                </div>

                <div>
                    <input
                        type='text'
                        value={movie_year}
                        placeholder='Año de estreno'
                        onChange={(e) => { setMovie_year(e.target.value); }}
                        style={{
                            padding: '0.5em',
                            fontSize: '16px',
                            border: '1px solid lightgray',
                            borderRadius: '4px',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            boxSizing: 'border-box',
                            marginTop: '10px'
                        }}
                    />
                </div>

                <div>{message ? <p>{message}</p> : <br />}</div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
                    <button type='submit' style={{
                        borderRadius: "4px",
                        backgroundColor: "#935116 ",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold",
                        color: "#FFFFFF"
                    }}>Agregar</button>

                    <Link to="/">
                        <button style={{
                            borderRadius: "4px",
                            backgroundColor: "##F1C40F",
                            padding: '15px 15px',
                            border: "none",
                            fontWeight: "bold",
                            color: "#FFFFFF"
                        }} >Atrás</button>
                    </Link>
                </div>

            </form>
        </div>
    );
}

export default New;