import { Button } from '@material-ui/core'
import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <h1>Página de Loguinho</h1>

            <p>
                <input type="text" />
                <input type="Senha" />
            </p>

            

                <Button variant='contained' color='primary'>
                    Entrar
                </Button>

                <Button variant='contained' color='primary'>
                    Cadastrar
                </Button>
       </div>
            )
}
            export default LoginPage