import React from "react";

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p>No hay peliculas</p>
    return (

        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre de la pelicula</th>
                    <th>Año de publicación</th>
                    <th>Director</th>
                </tr>

                <tbody>
                    {contents.map(({ id, name, year_of_publication, director_name }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{year_of_publication}</td>
                            <td>{director_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default List;