import React from "react";
import "./List.css";

const List = ({ contents }) => {
  return (
    <div className="list-container">
      <h4>Lista de Películas</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Año</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(({ id, name, year, director: { first_name } }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{year}</td>
              <td>{first_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;



