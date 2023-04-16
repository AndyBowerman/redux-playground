import React from "react";
import { useDispatch } from "react-redux";
import { CREATE_USER } from '../redux/actions';

const CreateUser = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_USER,
      payload: {
        name: e.target.name.value,
        age: e.target.age.value,
        email: e.target.email.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="number" name="age" placeholder="Age" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUser;
