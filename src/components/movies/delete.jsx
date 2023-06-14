import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('')
    const [messageDelete, setMessageDelete] = useState('')

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            deleteFetch(`movies/${idDelete}`)
                .then(() => {
                    setIdDelete('');
                    setMessageDelete('Se ha eliminado');
                    setRefresh(true);
                })
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <form onSubmit={handleDelete}>
                <div>
                    <input
                        type='numeric'
                        value={idDelete}
                        placeholder='ID de la pelicula'
                        onChange={(e) => { setIdDelete(e.target.value); }}
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

                <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
                    <button type='submit' style={{
                        borderRadius: "4px",
                        backgroundColor: "#5884D6",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold",
                        color: "#FFFFFF"
                        
                    }}>Eliminar</button>

                    <Link to="/">
                        <button style={{
                            borderRadius: "4px",
                            backgroundColor: "#DB4D4D",
                            padding: '15px 15px',
                            border: "none",
                            fontWeight: "bold",
                            color: "#FFFFFF"
                        }} >Atrás</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Delete;