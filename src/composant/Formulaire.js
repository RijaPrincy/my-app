import React, { useState } from 'react'

const Formulaire = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<center class="form" >
			<form
				onSubmit={event => {
					event.preventDefault()
					if (!user.name || !user.username) return

					props.addUser(user)
					setUser(initialFormState)
				}}
			>
				<label>Nom</label> &nbsp;&nbsp;
				<input type="text" name="name" value={user.name} onChange={handleInputChange} />&nbsp;&nbsp;
				<label>Prenom</label> &nbsp;&nbsp;
				<input type="text" name="username" value={user.username} onChange={handleInputChange} />&nbsp;&nbsp;
				<button class="btn btn-primary">Ajouter</button>
			</form>
		</center>
	)
}

export default Formulaire