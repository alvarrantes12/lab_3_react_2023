import React from 'react'

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay contenidos</p>
    return (
        <div>
            <h4>Peliculas</h4>
            <table>
                <tr>
                    <th style={{ padding: "0 4em 0 1em" }}>Id</th>
                    <th style={{ padding: "0 4em 0 1em" }}>Nombre de la Pelicula</th>
                    <th style={{ padding: "0 4em 0 1em" }}>Año de publicación</th>
                    <th style={{ padding: "0 4em 0 1em" }}>Director</th>
                </tr>
                {contents.map(({ id, name, year, director: { first_name, last_name }}) => (
                    <tr>
                        <td style={{ padding: "0 4em 0 1em" }}>{id}</td>
                        <td style={{ padding: "0 4em 0 1em" }}>{name}</td>
                        <td style={{ padding: "0 4em 0 1em" }}>{year}</td>
                        <td style={{ padding: "0 4em 0 1em" }}>{`${first_name} ${last_name}`}</td>
                    </tr>
                ))}
            </table>
            <br />
        </div>
    );
};
export default List;