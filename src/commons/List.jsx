import React from 'react';

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay contenido</p>
    return (
        <div>
            <h4>Pelis Disponibles</h4>
            <table>
                <tr>
                    <th style={{padding: "0 4em 0 4em"}}>Película</th>
                    <th style={{padding: "0 4em 0 4em"}}>Año de publicación</th>
                    <th style={{padding: "0 4em 0 4em"}}>Director</th>
                </tr>
                {contents.map(({movie_name, year, director: {first_name} }) => (
                    <tr>
                        <td>{movie_name}</td>
                        <td>{year}</td>
                        <td>{first_name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;