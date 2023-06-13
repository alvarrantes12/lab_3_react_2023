import React, { useState } from "react";
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
    const [name, setName] = useState('')
    const [year_release_date, setYear] = useState('')
    const [director_id, setDirector_id] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            postFetch('movies', { name: name, year_release_date: year_release_date, director_id: director_id })
                .then((response) => {
                    setName('')
                    setYear('')
                    setDirector_id('')
                    setMessage('Creado correctamente')
                    setRefresh(true)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <h1>Agregar</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={name}
                        placeholder="Nombre de la película"
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <input
                        type="numeric"
                        value={year_release_date}
                        placeholder="Año de publicación"
                        onChange={(e) => { setYear(e.target.value) }} />
                </div>
                <div>
                    <input
                        type="numeric"
                        value={director_id}
                        placeholder="ID del director"
                        onChange={(e) => { setDirector_id(e.target.value) }} />
                </div>
                <div>{message ? <p>{message}</p> : <br></br>}</div>
                <button className="btn-green" type="submit">Agregar</button>
            </form></>
    )
}

export default New;