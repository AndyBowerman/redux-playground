import React from 'react'
import AllUsers from './components/AllUsers'
import CreateUser from './components/CreateUser'
import DeleteUser from './components/DeleteUser'
import Login from './components/Login'
import Profile from './components/Profile'
import UseMemo from './components/UseMemo'
import UseCallback from './components/useCallback'
import UseRef from './components/UseRef'

const App = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Profile />
      <AllUsers />
      <CreateUser />
      <Login />
      <DeleteUser />
      <br/>
      <UseMemo />
      <br/>
      <UseCallback />
      <br/>
      <UseRef />
    </div>
  )
}

export default App
