import React from 'react';
import '../components/SidebarData/List.css';

const List = ({ contents }) => {
    if(!contents || contents.length === 0) return <p>No hay contenidos para mostrar</p>
    return (
        <div className="list-container"> 
            <h4>Datos disponibles</h4>
            <table>
                <tr>
                    <th> Id </th>
                    <th> Pelicula </th>
                    <th> Año de lanzamiento</th>
                    <th> Director </th>
                </tr>

                {contents.map(({id, name, year, director: {first_name}}) =>(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{year}</td>
                        <td>{first_name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;