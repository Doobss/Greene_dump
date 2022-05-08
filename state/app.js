import React, { useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from './appState/index.js';
import Auth from './pages/Auth'
import Browse from './pages/Browse'
import Donate from './pages/Donate'
import Home from './pages/Home'
import Item from './pages/Item'
import Transactions from './pages/Transactions'


function App() {
  const [state] = useContext(StateContext);
  console.log('app state', state)

  return (
      <AppContainer className='App' data-testid="app"  >
        <Auth   state={state.Auth}   />
        <Browse state={state.Browse} />
        <Donate state={state.Donate} />
        <Home   state={state.Home}   />
        <Item   state={state.Item}   />
        <Transactions state={state.Transactions} />
        <Footer><small>{'\u00a9 2022 Kaikoura Range. All rights reserved.'}</small></Footer>
      </AppContainer>
  );
}


const AppContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(20, 20, 20);

`
const LoadingContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(30, 30, 30);

`


const Footer = styled.footer`
  height: 2em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(35, 35, 35);
`

export default App;
