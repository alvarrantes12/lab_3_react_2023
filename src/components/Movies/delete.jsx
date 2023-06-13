import React from 'react';
import { deleteFetch } from '../../commons/ApiMethods';
import 'bootstrap/dist/css/bootstrap.min.css';


function Delete({ id,setRefresh }) {

    const handleDelete = async (event) =>{
        event.preventDefault();
        try{
          deleteFetch(`movies/${id}`)
            .then(() => {
                setRefresh(true);
            })
        } catch(error){
          console.log(error);
        }
      }

    return (       
    <form onSubmit={handleDelete}>
        <button className='btn btn-danger' type = 'submit'>Eliminar</button>
    </form>
    );
};


export default Delete;