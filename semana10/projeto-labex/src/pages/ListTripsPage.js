import React from 'react'
import styled from 'styled-components'


const ListTripsPageContainer = styled.div`
   color: black;
    text-align: center; 
`

const CaixaNome = styled.div`
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

export const ListTripsPage = () => {


    return (
        <ListTripsPageContainer>

          
            <button>Voltar</button>
            <button>Inscrever-se</button>

            <h1>Lista de Viagens</h1>

            <CaixaNome>
            </CaixaNome>

            <CaixaNome>
            </CaixaNome>

            <CaixaNome>
            </CaixaNome>

            <CaixaNome>
            </CaixaNome>

            <CaixaNome>
            </CaixaNome>

       

        </ListTripsPageContainer>
    )
}
