import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"

function Auth({ state, dispatch, init }) {

  useEffect(() => {
    init()
    .then(res => {
      console.log(`\nAuth API init res`, res)
      console.log('Auth state', state)
      dispatch({
        type: 'AUTH_INIT',
        payload: res
      })
    })
  }, [])

  return (
      <PageContainer >
        <h3>Auth</h3>
        <p>{`AuthData: ${state.AuthData}`} </p>
        <Link to="/">Home</Link>
        <Link to="/Donate">Donate</Link>
        <Link to="/Item">Item</Link>
      </PageContainer>
  );
}


const PageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(20, 20, 20);
`


export default Auth;
