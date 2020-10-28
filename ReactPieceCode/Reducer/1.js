import { useReducer } from 'react';

const INITIAL_STATE = { name: 'empty', age: 0 };

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
      <input
        type="text"
        value={state.name}
        onChange={event => dispatch({ type: "setName", name: event.currentTarget.value })} />
      <input
        type="text"
        value={state.age}
        onChange={event => dispatch({ type: "setAge", age: event.currentTarget.value })} />
    </div>
  )
}

export default Profile;
