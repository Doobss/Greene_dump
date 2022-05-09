import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"


function Browse({ state, dispatch, init }) {

  useEffect(() => {
    init()
    .then(res => {
      console.log(`\nBrowse API init res`, res)
      console.log('Browse state', state)
      dispatch({
        type: `BROWSE_INIT`,
        payload: res
      })
    })
  }, [])

  return (
      <PageContainer >
        <h3>Browse</h3>
        <p>{`BrowseData: ${state.BrowseData}`} </p>
        <Link to="/">Home</Link>
        <Link to="/Item">Item</Link>
        <Link to="/Auth">Auth</Link>
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


export default Browse;