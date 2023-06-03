import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('');
    const [messageDelete, setMessageDelete] = useState('');

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            deleteFetch(`movies/${idDelete}`).then(() => {
                setIdDelete('');
                setMessageDelete('Eliminado correctamente');
                setRefresh(true);
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleDelete} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
                <h2>Borrar pelicula</h2>
                <div>
                    <input
                        type='text'
                        value={idDelete}
                        placeholder='Numero de id'
                        onChange={(e) => { setIdDelete(e.target.value) }} />
                </div>
                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                }}>Eliminar</button>
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

export default Delete;