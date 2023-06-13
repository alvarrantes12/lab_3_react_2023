import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
    const [movieNameEdit, setMovieNameEdit] = useState('');
    const [idEdit, setIdEdit] = useState('');
    const [messageEdit, setMessageEdit] = useState('');

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
          putFetch(`movies/${idEdit}`, {movie_name: movieNameEdit})
            .then(() => {
              setMovieNameEdit('');
              setIdEdit('');
              setMessageEdit('Editado correctamente');
              setRefresh(true);
            });
        } catch (error) {
          console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={handleEdit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button type='submit' style={{ marginBottom: "1em", padding: "0.5em 1em", fontSize: "1em", backgroundColor: "lightblue", border: "none", borderRadius: "4px", cursor: "pointer" }}>Editar</button>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={idEdit} placeholder='ID (Peli)' onChange={(e) => { setIdEdit(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div style={{ marginBottom: "0.5em" }}>
                    <input type="text" value={movieNameEdit} placeholder='Nombre nuevo (Peli)' onChange={(e) => { setMovieNameEdit(e.target.value); }} style={{ padding: "0.5em", borderRadius: "4px", border: "1px solid lightgray" }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
            </form>
        </div>
    )
}

export default Edit;