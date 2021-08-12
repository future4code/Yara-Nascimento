import React, { useState } from 'react'
import { HomePage } from './pages/HomePage/HomePage'
import { MatchesPage } from './pages/MatchesPage/MatchesPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const changePage = () => {
    if (currentPage === 'home') {
      setCurrentPage('matches')

    } else {
      setCurrentPage('home')
    }
  }

  const cleanMatches = () => {
    console.log('Esse botão vai limpar os matches')
  }

  return (
    <div>
      {currentPage === 'home' ? <HomePage /> : <MatchesPage />}
      <button onClick={changePage}> {currentPage === 'home' ? 'Ir para Matches ' : 'Ir para Home'}Ir para Home</button>
      <button onClick={cleanMatches}>Limpar Matches</button>
    </div>
  )
}
export default App



















/*import React, { useState, useEffect } from 'react'
import { HomePage } from './Pages/HomePage/HomePage'
import { MatchesPage } from './Pages/MatchesPage/MatchesPage.js'
import styled from 'styled-components'



const BordaGeral = styled.div`
  position: absolute;
  border: 2px solid black;
  width: 300px;
  height: 450px;
  left: 455px;
  top: 65px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const AstroContainer = styled.div`
  position: absolute;
  left: 555px;
  top: 67px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const BotaoHome = styled.div`
  position: absolute;
  left: 464px;
  top: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const BotaoMatch = styled.div`
  position: absolute;
  left: 700px;
  top: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`


export default function App() {
  const [telaAtual, setTelaAtual] = useState("HomePage")




  const escolherTela = () => {
    switch (telaAtual) {
      case "HomePage":
        return <HomePage />
      case "MatchesPage":
        return <MatchesPage />
      default:
        return <div>Error</div>
    }
  }

  const irParaHome = (telaAtual) => {
    setTelaAtual("HomePage")
  }
  const irParaMatches = (mudaTela) => {
    setTelaAtual("MatchesPage")
  }


  return (
    <div>
      <AstroContainer>
        <strong>AstroMatch</strong>
      </AstroContainer>

      <BordaGeral>
        {escolherTela()}
      </BordaGeral>

      <BotaoHome>
      <button onClick={irParaHome}>Home</button>
      </BotaoHome>

      <BotaoMatch>
      <button onClick={irParaMatches}>Match</button>
      </BotaoMatch>
    </div>
  )

}
*/
