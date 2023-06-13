import React, { useState } from "react";
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
    const [nameEdit, setNameEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [messageEdit, setMessageEdit] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            putFetch(`movies/${idEdit}`, { name: nameEdit })
                .then(() => {
                    setNameEdit('')
                    setIdEdit('')
                    setMessageEdit('Editado correctamente')
                    setRefresh(true)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Editar</h1>
            <form onSubmit={handleEdit}>
                <div>
                    <input
                        type="text"
                        value={idEdit}
                        placeholder="ID de la película"
                        onChange={(e) => { setIdEdit(e.target.value) }} />
                </div>
                <div>
                    <input
                        type="text"
                        value={nameEdit}
                        placeholder="Nuevo nombre"
                        onChange={(e) => { setNameEdit(e.target.value) }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <button className="btn-yellow" type="submit">Editar</button>
            </form>
        </div>
    )
}

export default Edit;