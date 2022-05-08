import React, { useContext } from 'react';
import styled from 'styled-components';
import { DispatchContext } from '../appState/index.js';


function Auth({ state }) {
  const [, dispatch] = useContext(DispatchContext);

  console.log('AUTH state', state)
  return (
      <PageContainer >
        <h3>Auth</h3>
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
