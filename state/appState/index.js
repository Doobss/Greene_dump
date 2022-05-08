import React, { useReducer } from 'react';
import reducer from './reducers/index';

export const DispatchContext = React.createContext([null, () => {}]);
export const StateContext = React.createContext([{}]);


const initAppState = {
  Auth: { auth: [] },
  Browse: { browse: [] },
  Donate: { donate: [] },
  Home: { home: [] },
  Item: { item: [] },
  Transactions: { transactions: [] },
  user: { userName: 'Tim' },
}

const AppContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initAppState);

  return (
    <DispatchContext.Provider value={[null, dispatch]}>
      <StateContext.Provider value={[state]}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default AppContextProvider;