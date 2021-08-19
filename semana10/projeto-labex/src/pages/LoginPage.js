import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'



const LoginPageContainer = styled.div`
    color: black;
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

const BotaoContainer = styled.div`
    
    width: 100px; 
    margin-left: auto;
    margin-right: auto; 
    width: 350px;
    text-align: center;
    padding: 30px 30px;
    
   
    
    font-size: 18px;  
    `

export const LoginPage = () => {

    const history = useHistory()

    const voltarHomePage = () => {
        history.push('/')
    }

    const goToCreateTripsPage = () => {
        history.push('/CreateTripPage')
    }
    return (
        
        <div>

        <LoginPageContainer>
            <h1>LoginPage</h1>

            <label>
                E-mail:
                <input type="text" name="nome" />
            </label>
            <hr />
            <label>
                Senha:
                <input type="text" name="nome" />
            </label> 
        </LoginPageContainer>

        <BotaoContainer>
               <button onClick={voltarHomePage}>Voltar</button>
               <button onClick={goToCreateTripsPage}>Entrar</button>
         </BotaoContainer>
               </div>
       
        
    )
}