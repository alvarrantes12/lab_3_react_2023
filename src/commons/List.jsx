import React from "react";
import '../App.css';

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay pelìculas en estos momentos</p>

    return (
        <div className=".list-item">
            <h4 className=".heading">Pelìculas disponibles</h4>
            <table className=".list">
                <tr>
                    <th className=".list-item .movie">Id</th>
                    <th className=".list-item .name">Nombre</th>
                    <th className=".list-item .year">Año</th>
                    <th className=".list-item .director">Director</th>
                </tr>

                {contents.map(({id, name, year, director: {first_name, last_name}}) => (
                    <tr className=".container">
                        <td className=".list-item .movie">{id}</td>
                        <td classname=".list-item .name">{name}</td>
                        <td className=".list-item .year">{year}</td>
                        <td className=".list-item .director">{first_name} {last_name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;