import React,{Component} from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import Test4 from './Test4'

// const Tableau = props => (
// 	<center>
// 		<table class="table">
// 			<thead class="table table-bordered thead-light" >
// 				<tr >
// 					<th scope="col">Id</th>
// 					<th scope="col">Name</th>
// 					<th scope="col">Username</th>
// 					<th scope="col">Actions</th>
// 				</tr>
// 			</thead>
// 			<tbody >
				
// 				{props.users.length > 0 ? (
					
// 					props.users.map(user => (
// 						<tr key={user.id} class="table table-bordered">
// 							<td>{user.id}</td>
// 							<td>{user.name}</td>
// 							<td>{user.username}</td>
// 							<td>

								 
// 								  {/* <Popup trigger={<button class="btn btn-danger"> X</button>} position="right center">
// 									<div>confirmer  la suppression
// 									<button onClick={() =>props.deleteUser(user.id)} className="btn btn-danger">
// 										oui
// 									</button>
// 									<button  onClick={() => {
											
// 											}}	>
// 										Non
// 									</button>
// 									</div>
// 								 </Popup>   */}
// 								{/* <button onClick={() =>props.deleteUser(user.id)} className="btn btn-danger">
// 										oui
// 									</button> */}
// 									<Test4 user={user.id}/>


								 
// 							</td>
// 						</tr>
// 					))
// 				) : (
// 					<tr>
// 						<td colSpan={3}></td>
// 					</tr>
// 				)}
// 			</tbody>
// 		</table>
// 	</center>
// )


class Tableau extends Component{

	  submit = (a) => (
		confirmAlert({
			title: '',
			message: 'Confirmer la suppression',
			buttons: [
			  {
				label: 'oui',
				onClick: () =>this.props.deleteUser(a)
			  },
			  {
				label: 'Non',
				onClick: () => console.log("blabla")
			  }
			]
		  })
	)
	render(){
		return(
			<center>
		<table class="table">
			<thead class="table table-bordered thead-light" >
				<tr >
					<th scope="col">Id</th>
					<th scope="col">Nom</th>
					<th scope="col">Prenom</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody >
				
				{this.props.users.length > 0 ? (
					
					this.props.users.map(user => (
						<tr key={user.id} class="table table-bordered">
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>

								 
								  {/* <Popup trigger={<button class="btn btn-danger"> X</button>} position="right center">
									<div>confirmer  la suppression
									<button onClick={() =>props.deleteUser(user.id)} className="btn btn-danger">
										oui
									</button>
									<button  onClick={() => {
											
											}}	>
										Non
									</button>
									</div>
								 </Popup>   */}
								{/* <button onClick={() =>props.deleteUser(user.id)} className="btn btn-danger">
										oui
									</button> */}
									<button onClick={()=>this.submit(user.id) }className="btn btn-danger" >X</button>


								 
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
	}
}
export default Tableau