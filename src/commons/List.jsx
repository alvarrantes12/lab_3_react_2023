import React from "react";
import "../../src/list.css";

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay contenidos</p>

    return (
        <div>
            <h4 className="title">Estos son todos los datos disponibles de las películas</h4>
            <table className= "table">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Año</th>
                    <th>Director</th>
                </tr>

                {contents.map(({id, name, year, first_name}) => (
                    <tr>
                        <th>{id}</th>
                        <th>{name}</th>
                        <th>{year}</th>
                        <th>{first_name}</th>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default List;