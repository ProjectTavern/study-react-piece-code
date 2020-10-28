import React, { useReducer } from 'react';

const INITIAL_STATE = { name: 'empty', age: 0 };
export const ProfileDispatch = React.createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case "setName": {
      return { ...state, name: action.name };
    }
    case "setAge": {
      return { ...state, age: action.age };
    }
    default: {
      return state;
    }
  }
}

const Profile = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>{state.name}</p>
      <p>{state.age}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <ChildComponent />
      </ProfileDispatch.Provider>
    </div>
  )
}

export default Profile;
