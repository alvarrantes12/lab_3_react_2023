import React from 'react';

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay contenido</p>
    return (
        <div style={{ marginTop: "2em" }}>
        <h4>Pelis Disponibles</h4>
        <table style={{ borderCollapse: "collapse", width: "40%" }}>
            <thead>
            <tr>
                <th style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center" }}>ID</th>
                <th style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>Película</th>
                <th style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>Año de publicación</th>
                <th style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>Director</th>
            </tr>
            </thead>
            <tbody>
            {contents.map(({ movie_id, movie_name, year, director: { first_name } }) => (
                <tr key={movie_name}>
                <td style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>{movie_id}</td>
                <td style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>{movie_name}</td>
                <td style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>{year}</td>
                <td style={{ padding: "0 1em", borderBottom: "1px solid black", alignItems: "center"}}>{first_name}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default List;