import React from 'react'
import styled from 'styled-components'

const HomePageContainer = styled.div`
color: white;
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

`

export const HomePage = () => {

    return (

        <HomePageContainer>
                <h1>Labex</h1>
              <br />
       <button>Ver Viagens</button>
       <button>Área de Admin</button>

        </HomePageContainer>
    )
}