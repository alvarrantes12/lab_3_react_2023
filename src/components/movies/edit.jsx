import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function Edit({ setRefresh }) {
    const [editMovie_name, setEditMovie_name] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [messageEdit, setMessageEdit] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`movies/${idEdit}`, { movie_name: editMovie_name, })
                .then(() => {
                    setEditMovie_name('');
                    setIdEdit('');
                    setMessageEdit('Editado correctamente');
                    setRefresh(true);
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <form onSubmit={handleEdit}>
                <div>
                    <input
                        type='numeric'
                        value={idEdit}
                        placeholder='ID de la pelicula'
                        onChange={(e) => { setIdEdit(e.target.value); }}
                        style={{
                            padding: '0.5em',
                            fontSize: '16px',
                            border: '1px solid lightgray',
                            borderRadius: '4px',
                            outline: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    />
                </div>

                <div>
                    <input
                        type='text'
                        value={editMovie_name}
                        placeholder='Nombre de la pelicula'
                        onChange={(e) => { setEditMovie_name(e.target.value); }}
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

                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
                    <button type='submit' style={{
                        borderRadius: "4px",
                        backgroundColor: "#1B4F72 ",
                        padding: '15px 15px',
                        border: "none",
                        fontWeight: "bold",
                        color: "#FFFFFF"
                    }}>Editar</button>

                    <Link to="/">
                        <button style={{
                            borderRadius: "4px",
                            backgroundColor: "#2471A3",
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
export default Edit;