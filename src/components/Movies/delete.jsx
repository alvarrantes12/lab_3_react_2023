import React, { useState } from "react";
import { deleteFetch } from "../../commons/ApiMethods";

function Delete({ setRefresh }) {
  const [idDelete, setIdDelete] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`movies/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessage('Se eliminó correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#643843', color: '#E7CBCB', marginTop: '20px'}}>
      <h3 style={{marginBottom: '10px'}}>Eliminar una película</h3>
      <form onSubmit={handleDelete}>
        <div style={{marginBottom: '10px'}}>
          <input
            type="text"
            value={idDelete}
            placeholder="Número ID de la película"
            onChange={(e) => {setIdDelete(e.target.value);}}
            style={{ padding: '10px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#F5EFEF', color: '#643843'}}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className="btn-red" type="submit" style={{padding: '10px 20px', borderRadius: '5px', border: 'none', outline: 'none', backgroundColor: '#E7CBCB', color: '#643843', cursor: 'pointer'}}>Eliminar</button>
        </div>
      </form>
    </div>
  );
}

export default Delete;
