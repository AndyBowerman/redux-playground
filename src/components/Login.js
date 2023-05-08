import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../redux/actions';

const Login = () => {
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN,
      payload: {
        id: e.target.id.value
      }
    })
  }
  return (
    <form onSubmit={login}>
      <input type="number" name='id' placeholder='Enter ID'/>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login