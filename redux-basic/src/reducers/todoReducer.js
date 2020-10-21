const todos = (state = { list: [] }, action) => {

  switch (action.type) {
    case 'ADD_TODO': {
      console.log('ADD_TODO ...' + action);

      const newList = [...state.list, { text: action.text, completed: false }];
      state = Object.assign({}, state, { list: newList });
      break;
    }
    default: {
      return state;
    }
  }

  return state;
}

export default todos;