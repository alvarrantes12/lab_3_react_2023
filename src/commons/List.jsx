import React from "react";

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>No hay peliculas</p>

    return (

        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <table>
                <tr>
                    <th style={{ padding: "1em", backgroundColor: "lightgray" }}>Id</th>
                    <th style={{ padding: "1em", backgroundColor: "lightgray" }}>Nombre de la pelicula</th>
                    <th style={{ padding: "1em", backgroundColor: "lightgray" }}>Año en que se estrenó</th>
                    <th style={{ padding: "1em", backgroundColor: "lightgray" }}>Director</th>
                </tr>

                <tbody>
                    {contents.map(({ id, movie_name, movie_year, director: { first_name, last_name } }) => (
                        <tr>
                            <td style={{ padding: "1em", backgroundColor: "lightgray", textAlign: "center", fontWeight: "bold" }} >{id}</td>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center", fontWeight: "bold" }} >{movie_name}</td>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center", fontWeight: "bold" }} >{movie_year}</td>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center", fontWeight: "bold" }} >{`${first_name} ${last_name}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default List;
