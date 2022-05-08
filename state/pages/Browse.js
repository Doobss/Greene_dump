import React, { useContext } from 'react';
import styled from 'styled-components';
import { DispatchContext } from '../appState/index.js';
import { Link } from "react-router-dom"


function Browse({ state }) {
  const [, dispatch] = useContext(DispatchContext);
  console.log('Browse state', state)
  return (
      <PageContainer >
        <h3>Browse</h3>
        <Link to="/">Home</Link>
        <Link to="/Browse">Browse</Link>
        <Link to="/Auth">Auth</Link>
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


export default Browse;