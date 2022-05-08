import React, { useContext } from 'react';
import styled from 'styled-components';
import { DispatchContext } from '../appState/index';
import { Link } from "react-router-dom"


function Home({ state }) {
  const [, dispatch] = useContext(DispatchContext);

  console.log('Home state', state)
  return (
      <PageContainer >
        <h3>Home</h3>
        <Link to="/Auth">Auth</Link>
        <Link to="/Item">Item</Link>
        <Link to="/Transactions">Transactions</Link>
        <Link to="/Browse">Browse</Link>

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


export default Home;