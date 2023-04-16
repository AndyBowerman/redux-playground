import React from 'react'
import AllUsers from './components/AllUsers'
import CreateUser from './components/CreateUser'
import DeleteUser from './components/DeleteUser'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Profile />
      <AllUsers />
      <CreateUser />
      <Login />
      <DeleteUser />
    </div>
  )
}

export default App
