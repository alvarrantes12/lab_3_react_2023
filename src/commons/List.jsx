import React from "react";

const List = ({ contents }) => {
  return(
		<div>
			<h4>Datos Disponibles</h4>
			<table>
				<tr>
					<th style={{padding: "0 4em 0 4em"}}>Id</th>
					<th style={{padding: "0 4em 0 4em"}}>Nombre</th>
					<th style={{padding: "0 4em 0 4em"}}>Año</th>
					<th style={{padding: "0 4em 0 4em"}}>Director</th>
				</tr>

				{contents.map(({id, name, year, director: {first_name}}) => (
					<tr>
						<td style={{padding: "0 4em 0 4em"}}>{id}</td>
						<td style={{padding: "0 4em 0 4em"}}>{name}</td>
						<td style={{padding: "0 4em 0 4em"}}>{year}</td>
						<td style={{padding: "0 4em 0 4em"}}>{first_name}</td>
					</tr>
				))}
			</table>
		</div>
	)
}
export default List;