



function reducer(state, action) {
  let newState;
  const { type, payload } = action
  console.log('Donate REDUCER', state, type, payload)
  switch (type) {

    case 'DONATE_INIT':
      newState = { ...state, ...payload };
      return newState;

    default:
      return state;
  }
}

export default reducer;