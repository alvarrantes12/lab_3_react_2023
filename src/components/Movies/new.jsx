import React, { useState } from "react";
import { postFetch } from "../../commons/ApiMethods";
import "./botones.css";
import "./form.css";


function New({ setRefresh }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [directorId, setDirectorId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch("movies", {
        name: name,
        year: year,
        director_id: directorId,
      }).then((response) => {
        setName("");
        setYear("");
        setDirectorId("");
        setMessage("Creado correctamente");
        setRefresh(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className = "form-container" onSubmit={handleSubmit}>
        <div>
          <input className="form-input"
            type="text"
            value={name}
            placeholder="Nombre de la película"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input className="form-input"
            type="text"
            value={year}
            placeholder="Año de la película"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div>
          <input className="form-input"
            type="text"
            value={directorId}
            placeholder="Id del director"
            onChange={(e) => {
              setDirectorId(e.target.value);
            }}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type="submit" className="green-button">Crear película</button>
      </form>
    </>
  );
}
export default New;
