import React from 'react'
import { useSelector } from "react-redux";

const AllUsers = () => {
    const users = useSelector((state) => state.users);
    const renderUsers = users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
    })
  return (
    <ul>
      {renderUsers}
    </ul>
  )
}

export default AllUsers
