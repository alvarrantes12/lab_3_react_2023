import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
    const [nameEdit, setNameEdit] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [messageEdit, setMessageEdit] = useState('');

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`movies/${ idEdit }`, { name: nameEdit })
                .then(() => {
                    setNameEdit('');
                    setIdEdit('');
                    setMessageEdit('¡Editado exitosamente!');
                    setRefresh(true);
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleEdit}>
                <div>
                    <input
                        type='numeric'
                        value={idEdit}
                        placeholder='ID de la película'
                        onChange={(e) => { setIdEdit(e.target.value) }}
                    />
                </div>

                <div>
                    <input
                        type='text'
                        value={nameEdit}
                        placeholder='Nombre de la película'
                        onChange={(e) => { setNameEdit(e.target.value); }}
                    />
                </div>

                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <div>
                    <button type='submit'>Editar</button>

                </div>
            </form>
        </div>
    )

}
export default Edit;