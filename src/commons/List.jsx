import React from "react";

const List = ({ contents }) => {

    if(!contents || contents.length == 0) return <p>No hay contenidos</p>

    return (
        <div>
            <h4>Estos son los datos disponibles</h4>
            <table>
                <tr>
                    <th style={{padding:" 0 4em 0 4em"}}>Id</th>
                    <th style={{padding:" 0 4em 0 4em"}}>Nombre</th>
                    <th style={{padding:" 0 4em 0 4em"}}>Año</th>
                    <th style={{padding:" 0 4em 0 4em"}}>Director</th>
                </tr>

                {contents.map(({id, name, year_release_date, director: {first_name}}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{year_release_date}</td>
                        <td>{first_name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;