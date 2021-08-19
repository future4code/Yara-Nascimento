import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const HomePageContainer = styled.div`
width: 100px; 
    margin-left: auto;
    margin-right: auto; 
    width: 350px;
    text-align: center;
    padding: 50px 60px;
    border: 3px solid #eee;
    border-radius: 50px;
    background-color: pink;
    font-size: 18px;
    align-items: center;
`

export const HomePage = () => {
const history = useHistory()

    const goToListTripsPage = () => {
        history.push('/ListTripsPage')
    }

    const goToLoginPage = () => {
        history.push('/LoginPage')
    }

    return (

        <HomePageContainer>
                <h1>Labex</h1>
              <img src='https://images8.alphacoders.com/642/642527.jpg' width='100%'/>
       <button onClick={goToListTripsPage}>Ver Viagens</button>
       <button onClick={goToLoginPage}>Área de Admin</button>

        </HomePageContainer>
    )
}