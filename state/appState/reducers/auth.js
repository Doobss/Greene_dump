



function reducer(state, action) {
  let newState;
  const { type, payload } = action
  console.log('Auth REDUCER', state)
  switch (type) {

    case 'GET_AUTH':
      newState = { ...state, ...payload };
      return newState;

    default:
      return state;
  }
}

export default reducer;