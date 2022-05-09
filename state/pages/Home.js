import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"


function Home({ state, dispatch, init }) {

  useEffect(() => {
    init()
    .then(res => {
      console.log(`\nHome API init res`, res)
      console.log('Home state', state)
      dispatch({
        type: `HOME_INIT`,
        payload: res
      })
    })
  }, [])

  return (
      <PageContainer >
        <h3>Home</h3>
        <p>{`HomeData: ${state.HomeData}`} </p>
        <Link to="/Auth">Auth</Link>
        <Link to="/Browse">Browse</Link>
        <Link to="/Donate">Donate</Link>
        <Link to="/Item">Item</Link>
        <Link to="/Transactions">Transactions</Link>

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


export default Home;