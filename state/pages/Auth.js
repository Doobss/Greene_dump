import React, { useContext } from 'react';
import styled from 'styled-components';
import { DispatchContext } from '../appState/index.js';
import { Link } from "react-router-dom"

function Auth({ state }) {
  const [, dispatch] = useContext(DispatchContext);

  console.log('Auth state', state)
  return (
      <PageContainer >
        <h3>Auth</h3>
        <Link to="/">Home</Link>
        <Link to="/Donate">Donate</Link>
        <Link to="/Item">Item</Link>
      </PageContainer>
  );
}


const PageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(20, 20, 20);
`


export default Auth;
