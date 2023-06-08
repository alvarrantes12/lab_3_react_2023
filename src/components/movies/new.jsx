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
					setMessage('Creado correctamente')
					setRefresh(true)
				})
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<div className="div-color">
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
						placeholder="ID del director"
						onChange={(e) => {setDirector_id(e.target.value)}} />
				</div>
				<div>{message ? <p>{message}</p> : <br />}</div>
				<button className="btn-green" type="submit">Crear película</button>
			</form>
		</div>
	)
}

export default New;