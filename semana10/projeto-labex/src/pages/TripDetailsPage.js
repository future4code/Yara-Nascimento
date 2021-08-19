import React from 'react'

import { useHistory } from 'react-router-dom'

export const TripeDetailsPage = () => {
    const history = useHistory()

    const entrarEmAdminHomePage = () => {
        history.push('/AdminHomePage')
    }

    
    return(
        
        <div>

            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>

            <button onClick={entrarEmAdminHomePage}>Ver detalhes de uma viagem específica</button>
            </div>


    )  
     

}



