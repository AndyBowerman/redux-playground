import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userSelector = state => state.currentUser;

  const state = useSelector((state) => state);
  const users = useSelector((state) => state.users);
  const currentUser = useSelector(userSelector);

  const test = () => console.log(currentUser.hasOwnProperty('name'));

  //Serach by ID
  return (
    <div>
      <button onClick={test}>test</button>
      <h1>Name: {currentUser.hasOwnProperty('name') ? currentUser.name : 'User not found'}</h1>
      <h1>Age: {currentUser.hasOwnProperty('age') ? currentUser.age : ''}</h1>
      <h1>Email: {currentUser.hasOwnProperty('email') ? currentUser.email : ''}</h1>
    </div>
  );
};

export default Profile;
