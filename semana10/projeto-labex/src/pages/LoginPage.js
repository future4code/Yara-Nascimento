import React from 'react'
import styled from 'styled-components'



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

export const LoginPage = () => {
    return (

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
           <div>
               <button>Voltar</button>
               <button>Entrar</button>
           </div>
        </LoginPageContainer>
        
        
        
    )
}