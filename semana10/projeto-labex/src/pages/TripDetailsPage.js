import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const TripeDetailsPage = () => {
    useEffect(() => {

        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/yara-lovelace/OmaOEktwowBkWgbcmkyo', {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log(response.data);

        }).catch((error) => {
            console.log('Deu erro:', error.response)
        })
    }, [])

    const history = useHistory()

    const entrarEmAdminHomePage = () => {
        history.push('/admin/trips/:id')
    }

    return(
        
        <div>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>

            <button onClick={entrarEmAdminHomePage}>Ver detalhes de uma viagem específica</button>

            </div>


    )  
     

}



