import React, { useReducer } from 'react';
import ThemeProvider from './theme';
import reducer from './reducers/index';

export const DispatchContext = React.createContext([null, () => {}]);
export const StateContext = React.createContext([{}]);


const initAppState = {
  Auth: { AuthData: false },
  Browse: { BrowseData: false },
  Donate: { DonateData: false },
  Home: { HomeData: false },
  Item: { ItemData: false },
  Transactions: { TransactionsData: false },
  user: { userName: 'Tim' },
}

const AppContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initAppState);

  return (
    <DispatchContext.Provider value={[null, dispatch]}>
      <StateContext.Provider value={[state]}>
        <ThemeProvider />
          {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default AppContextProvider;