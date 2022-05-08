




function reducer(state, action) {
  let newState;
  const { type, payload } = action
  console.log('Item REDUCER', state)
  switch (type) {

    case 'GET_ITEMS':
      newState = { ...state, ...payload };
      return newState;

    default:
      return state;
  }
}

export default reducer;