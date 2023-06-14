import React from "react";

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>No hay peliculas</p>

    return (

        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <table>
                <tr>
                    <th style={{backgroundColor: "#AFD1FF" }}>Id</th>
                    <th style={{backgroundColor: "#AFD1FF" }}>Pelicula</th>
                    <th style={{backgroundColor: "#AFD1FF" }}>Año</th>
                    <th style={{backgroundColor: "#AFD1FF" }}>Director</th>
                </tr>

                <tbody>
                    {contents.map(({ id, movie_name, movie_year, director: { first_name, last_name } }) => (
                        <tr>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center"}} >{id}</td>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center"}} >{movie_name}</td>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center"}} >{movie_year}</td>
                            <td style={{ padding: "1em", backgroundColor: "#E8E8E8", textAlign: "center"}} >{`${first_name} ${last_name}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default List;