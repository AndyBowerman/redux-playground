import * as actions from './actions';

const initialState = {
  users: [],
  currentUser: {}
}

let nextId = 0;

const reducer = (state = initialState, action) => {
  if (action.type === actions.CREATE_USER) {
    return {...state, users: [...state.users, {...action.payload, id: ++nextId}]}
  } else if(action.type === actions.LOGIN) {
    return {...state, currentUser: state.users.filter(user => user.id === parseInt(action.payload.id))[0]}
  } else if(action.type === actions.DELETE_USER) {
    return {...state, users: state.users.filter(user => user.id !== parseInt(action.payload.id)), currentUser: state.currentUser.id === parseInt(action.payload.id) ? {} : state.currentUser}
  } else {
    return state;
  }
};

export default reducer;

/*
    {
        users: [
            {
                id: 1,
                name: "",
                age: "",
                email: ""
            }, ...
        ]
    }

    ACTIONS
        - create user
        - login as user
        - delete user
        - amend user
*/
