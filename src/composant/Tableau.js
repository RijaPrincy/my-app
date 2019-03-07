import React from 'react'

const Tableau = props => (
	<center>
		<table class="table">
			<thead class="table table-bordered thead-light" >
				<tr >
					<th scope="col">Id</th>
					<th scope="col">Name</th>
					<th scope="col">Username</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody >
				{props.users.length > 0 ? (
					props.users.map(user => (
						<tr key={user.id} class="table table-bordered">
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>
								 <button
								onClick={() => {if(window.confirm('confirmer la suppression'))
									props.deleteUser(user.id)}}
								class="btn btn-danger"
								>
								X
								</button> 
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan={3}></td>
					</tr>
				)}
			</tbody>
		</table>
	</center>
)

export default Tableau