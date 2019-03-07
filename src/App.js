import React, { useState } from 'react'
import Tableau from './composant/Tableau'
import Formulaire from './composant/Formulaire'
import 'bootstrap/dist/css/bootstrap.min.css'
import './composant/Formulaire.css'
import './composant/Tableau.css'

const App = () => {
  const usersData = [
  ]

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <Formulaire addUser={addUser} />
        </div>
        <div className="flex-large">
          <Tableau users={users}  deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App