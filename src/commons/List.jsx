import React from 'react';

const List = ({ contents }) => {

  if (!contents || contents.length === 0) return <h1>No hay contenido</h1>
  return (
    <div>
      <h4>Estos son los contenidos disponibles</h4>
      <table>
        <tr>
          <th style={{padding: "0 4em 0 4em"}}>Nombre</th>
          <th style={{padding: "0 4em 0 4em"}}>Año</th>
          <th style={{padding: "0 4em 0 4em"}}>Director</th>
        </tr>

        {contents.map(({ name, date, director: { first_name } }) => (
          <tr>
            <td>{name}</td>
            <td>{date}</td>
            <td>{first_name}</td>
          </tr>
        ))
        }


      </table>


    </div >
  )
}
export default List