import React, { useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from './appState/index.js';
import { Routes, Route, Link } from "react-router-dom";
import Auth from './pages/Auth'
import Browse from './pages/Browse'
import Donate from './pages/Donate'
import Home from './pages/Home'
import Item from './pages/Item'
import Transactions from './pages/Transactions'


function App() {
  const [state] = useContext(StateContext);
  console.log('App state', state)

  return (
    <AppContainer className='App' data-testid="app"  >
      <Routes>
        <Route path="/"      element={<Home   state={state.Home}   />} />
        <Route path="Auth"   element={<Auth   state={state.Auth}   />} />
        <Route path="Browse" element={<Browse state={state.Browse} />} />
        <Route path="Donate" element={<Donate state={state.Donate} />} />
        <Route path="Item"   element={<Item   state={state.Item}   />} />
        <Route path="Transactions" element={<Transactions state={state.Transactions} />} />
      </Routes>
      <Footer><small>{'\u00a9 2022 Greene Inc. All rights reserved.'}</small></Footer>
    </AppContainer>
  );
}


const AppContainer = styled.div`
  width: 100%;
  height: 700px;
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
