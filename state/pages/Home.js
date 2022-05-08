import React, { useContext } from 'react';
import styled from 'styled-components';
import { DispatchContext } from '../appState/index';


function Home({ state }) {
  const [, dispatch] = useContext(DispatchContext);

  console.log('Home state', state)
  return (
      <PageContainer >
        <h3>Home</h3>
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