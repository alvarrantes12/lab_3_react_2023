import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function Edit({setRefresh}) {
    const [nameEdit, setNameEdit] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [messageEdit, setMessageEdit] = useState('');

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`movies/${idEdit}`, { name: nameEdit }).then(() => {
                setNameEdit('');
                setIdEdit('');
                setMessageEdit('Editado correctamente');
                setRefresh(true);
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>        
            <form onSubmit={handleEdit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
                <h2>Editar pelicula</h2>            
                <div>
                    <input
                        type='text'
                        value={idEdit}
                        placeholder='Numero de id'
                        onChange={(e) => { setIdEdit(e.target.value) }} />
                </div>
                <div style={{marginTop: '5px'}}>
                    <input
                        type='text'
                        value={nameEdit}
                        placeholder='Nuevo nombre de la pelicula'
                        onChange={(e) => { setNameEdit(e.target.value) }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <button type='submit' style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                }}>Editar</button>
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

export default Edit;