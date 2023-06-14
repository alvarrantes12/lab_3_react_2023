import React, { useState } from "react";
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
	const [nameEdit, setNameEdit] = useState('')
	const [idEdit, setIdEdit] = useState('')
	const [message, setMessage] = useState('')

	const handleEdit = async (event) => {
		event.preventDefault()
		try {
			putFetch(`movies/${idEdit}`, {name: nameEdit})
				.then(() => {
					setNameEdit('')
					setIdEdit('')
					setMessage('Editado correctament')
					setRefresh(true)
				})
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<div>
			<h3>Editar una película</h3>
			<form onSubmit={handleEdit}>
				<div>
					<input
						type="text"
						value={idEdit}
						placeholder="ID de la película"
						onChange={(e) => {setIdEdit(e.target.value)}} />
				</div>
				<div>
					<input
						type="text"
						value={nameEdit}
						placeholder="Nuevo nombre de la película"
						onChange={(e) => {setNameEdit(e.target.value)}} />
				</div>
				<div>{message ? <p>{message}</p> : <br />}</div>
				<button type="submit">Guardar cambios</button>
			</form>
		</div>
	)
}

export default Edit;