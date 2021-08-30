import React from 'react'
import { useHistory } from 'react-router-dom'





export const CreateTripsPage = () =>  {
    const history = useHistory()

    const voltarAoInicio = () => {
        history.push('/')
    }
    
    return(
        <div>
        <button onClick={voltarAoInicio}>Voltar a página inicial</button>
        <p>Formulário para o administrador criar uma nova viagem</p>

        <button>Enviar</button>
        
        </div>
    )

}
