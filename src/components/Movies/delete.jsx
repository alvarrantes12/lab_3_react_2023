import React, { useState } from "react";
import { deleteFetch } from "../../commons/ApiMethods";
import "./delete.css";

function Delete({ setRefresh }) {
    const [idDelete, setIdDelete] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            deleteFetch(`movies/${idDelete}`)
                .then(() => {
                    setIdDelete('');
                    setMessage('Eliminado correctamente');
                    setRefresh(true);
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="delete-container">
            <h3>Eliminar una película</h3>
            <form onSubmit={handleDelete}>
                <div>
                    <input
                        type="text"
                        value={idDelete}
                        placeholder="ID de la película"
                        onChange={(e) => { setIdDelete(e.target.value); }} />
                </div>
                <div>{message ? <p>{message}</p> : <br />}</div>
                <button className="btn" type="submit">Eliminar</button>
            </form>
        </div>
    );
}

export default Delete;