import React from "react";

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay peliculas</p>;

    return (
        <div style={{ margin: "20px" }}>
            <h3>Estas son todas las películas:</h3>
            <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "0.5em", borderBottom: "1px solid black", backgroundColor: "lightgray" }}>Identificador</th>
                        <th style={{ padding: "0.5em", borderBottom: "1px solid black", backgroundColor: "lightgray" }}>Nombre de la pelicula</th>
                        <th style={{ padding: "0.5em", borderBottom: "1px solid black", backgroundColor: "lightgray" }}>Año de estreno</th>
                        <th style={{ padding: "0.5em", borderBottom: "1px solid black", backgroundColor: "lightgray" }}>Director</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(({ id, name, year, director: { first_name, last_name } }) => (
                        <tr key={id}>
                            <td style={{ padding: "0.5em", borderBottom: "1px solid black", textAlign: "center" }}>{id}</td>
                            <td style={{ padding: "0.5em", borderBottom: "1px solid black", textAlign: "center" }}>{name}</td>
                            <td style={{ padding: "0.5em", borderBottom: "1px solid black", textAlign: "center" }}>{year}</td>
                            <td style={{ padding: "0.5em", borderBottom: "1px solid black", textAlign: "center" }}>{`${first_name} ${last_name}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;