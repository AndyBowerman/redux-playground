import React from 'react'
import { useDispatch } from 'react-redux';
import { DELETE_USER } from '../redux/actions';

const DeleteUser = () => {
    const dispatch = useDispatch();

    const deleteUser = (e) => {
        e.preventDefault();
        dispatch({
            type: DELETE_USER,
            payload: {
                id: e.target.id.value
            }
        })
    }
  return (
    <form onSubmit={deleteUser}>
      <input type="string" name='id' placeholder='Enter ID' />
      <button type='submit'>Delete</button>
    </form>
  )
}

export default DeleteUser
