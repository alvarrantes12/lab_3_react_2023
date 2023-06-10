import React from "react";
import './List.css';

const List = ({contents}) => {
    if(!contents || contents.length === 0)return <p>No hay contenido sobre las peliculas</p>

    return (
        <div className="list-container">
            <h4 style={{margin: "4px", fontSize: "1em"}} >Estos son los datos disponibles</h4>
            <table className="list-table">
                <tr>
                    <th style={{padding: "0 4em 0 4em"}}>Identificacion</th>
                    <th style={{padding: "0 4em 0 4em"}}>Nombre de la pelicula</th>
                    <th style={{padding: "0 4em 0 4em"}}>Año de lanzaminto</th>
                    <th style={{padding: "0 4em 0 4em"}}>Nombre del director</th>
                </tr>

                {contents.map(({id, name, year, director: {first_name, last_name}}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{year}</td>
                        <td>{first_name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default List;