import React from 'react';

const List = ({ contents}) => {

    if(!contents || contents.length === 0) return <p>No hay contenidos</p>

    return (
        <div>
            <h4>Estos son los datos disponibles</h4>
            <div style={{ maxHeight: '400px', overflow: 'auto' }}>
            <table >
                <tr>
                    <th style={cellStyle}> Id</th>
                    <th style={cellStyle}>Nombre</th>
                    <th style={cellStyle}>Año</th>
                    <th style={cellStyle}>Director</th>
                </tr>
                
                {contents?.map(({id, name, year, director: {first_name}}) => (
                    <tr>
                        <td style={cellStyle}>{id}</td>
                        <td style={cellStyle}>{name}</td>
                        <td style={cellStyle}>{year}</td>
                        <td style={cellStyle}>{first_name}</td>
                    </tr>
                ))}
            </table>
        </div>
            
            </div>
            
        
    );
};

const cellStyle = {
    padding: '1em',
    border: '1px solid #ccc',
};

export default List;