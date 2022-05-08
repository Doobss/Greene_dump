




function reducer(state, action) {

  let newState;
  const { type, payload } = action
  console.log('Transactions REDUCER', state)
  switch (type) {

    case 'GET_TRANSACTIONS':
      newState = { ...state, ...payload };
      return newState;

    default:
      return state;
  }
}

export default reducer;