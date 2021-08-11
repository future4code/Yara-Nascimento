import React from 'react'
import styled from 'styled-components';
import HomePage from './pages/HomePage/HomePage'
import MatchesPage from './pages/MatchesPage/MatchesPage'



const BordaGeral = styled.div`
  position: absolute;
  border: 1px solid black;
  width: 350px;
  height: 500px;
  left: 455px;
  top: 65px;
  display: flex;
  justify-content: center;
  color: black;

  strong {
    color: aqua;
    
    
  }
`


const App = () => {
  return (

    <BordaGeral>

      <strong>
        astromatch
        <hr />
      </strong>

      <HomePage />
      <MatchesPage />

    </BordaGeral>

  )

}

export default App