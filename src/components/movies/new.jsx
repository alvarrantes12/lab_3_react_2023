import React, { useState } from "react";
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState('')
	const [year, setYear] = useState('')
	const [director_id, setDirector_id] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			postFetch('movies', {name: name, year: year, director_id: director_id})
				.then((response) => {
					setName('')
					setYear('')
					setDirector_id('')
					setMessage('Se creó correctamente')
					setRefresh(true)
				})
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<div>
			<h3>Crear una película</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						value={name}
						placeholder="Nombre de la película"
						onChange={(e) => {setName(e.target.value)}} />
				</div>
				<div>
					<input
						type="numeric"
						value={year}
						placeholder="Año de publicación"
						onChange={(e) => {setYear(e.target.value)}} />
				</div>
				<div>
					<input
						type="numeric"
						value={director_id}
						placeholder="Numero ID del director"
						onChange={(e) => {setDirector_id(e.target.value)}} />
				</div>
				<div>{message ? <p>{message}</p> : <br />}</div>
				<button type="submit">Crear</button>
			</form>
		</div>
	)
}

export default New;