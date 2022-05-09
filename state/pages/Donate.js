import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"


function Donate({ state, dispatch, init }) {
  const { donate } = state

  useEffect(() => {
    init()
    .then(res => {
      console.log(`\nDonate API init res`, res)
      console.log('Donate state', state)
      dispatch({
        type: `DONATE_INIT`,
        payload: res
      })
    })
  }, [])

  return (
      <PageContainer >
        <h3>Donate</h3>
        <p>{`DonateData: ${state.DonateData}`} </p>
        <Link to="/">Home</Link>
        <Link to="/Auth">Auth</Link>
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

    // dispatch({
    //   type: 'GET_DONATIONS',
    //   payload: { donate: [2, 3, 4, 5, 6, 7, 8] }
    // })
    // {/* {donate.map((val, ind) => <p key={ind} >{val.toString()}</p>)} */}

export default Donate;