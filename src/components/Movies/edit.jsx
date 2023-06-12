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
            <form onSubmit={handleEdit}>
                <div>
                    <input type="text" value={idEdit} placeholder='ID Película' onChange={(e) => {setIdEdit(e.target.value); }} />
                </div>
                <div>
                    <input type="text" value={movieNameEdit} placeholder='Nuevo nombre de la película' onChange={(e) => { setMovieNameEdit(e.target.value); }} />
                </div>
                <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
                <button type='submit'>Editar Película</button>
            </form>
        </div>
    )
}

export default Edit;