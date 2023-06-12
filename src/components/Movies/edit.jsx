import React, { useState } from "react";
import { putFetch } from "../../commons/ApiMethods";
import "./botones.css";
import "./form.css";


function Edit({ setRefresh }) {
  const [nameEdit, setNameEdit] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [messageEdit, setMessageEdit] = useState("");

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`movies/${idEdit}`, { name: nameEdit }).then(() => {
        setIdEdit("");
        setNameEdit("");
        setMessageEdit("Se edito correctamente la película");
        setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className = "form-container" onSubmit={handleEdit}>
      <div>
        <input className="form-input"
          type="text"
          value={idEdit}
          placeholder="Número de id de la película"
          onChange={(e) => {
            setIdEdit(e.target.value);
          }}
        />
      </div>
      <div>
        <input className="form-input"
          type="text"
          value={nameEdit}
          placeholder="Nuevo nombre de la película"
          onChange={(e) => {
            setNameEdit(e.target.value);
          }}
        />
      </div>
      <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
      <button type="submit" className="blue-button">Editar película</button>
    </form>
  );
}
export default Edit;