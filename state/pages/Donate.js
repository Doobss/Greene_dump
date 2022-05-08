import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { DispatchContext } from '../appState/index.js';


function Donate({ state }) {
  const [, dispatch] = useContext(DispatchContext);
  const { donate } = state

  useEffect(() => {
    // dispatch({
    //   type: 'GET_DONATIONS',
    //   payload: { donate: [2, 3, 4, 5, 6, 7, 8] }
    // })
  }, [])

  console.log('Donate state', state)
  return (
      <PageContainer >
        <h3>Donate</h3>
        {donate.map((val, ind) => <p key={ind} >{val.toString()}</p>)}
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


export default Donate;