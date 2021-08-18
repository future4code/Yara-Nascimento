import React from 'react'
import styled from 'styled-components'

const ButtonViagens = styled.div`
  justify-content: space-between;
`



export const HomeViagens = () => {
    return(
        <div>
        <ButtonViagens>
            <h1>Labex</h1>
            <button>Ver viagens</button>
            <button>Área de Admin</button>
        </ButtonViagens>
    
        
        </div>
    )
}