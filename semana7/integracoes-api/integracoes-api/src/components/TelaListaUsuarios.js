import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'




const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;

`


export default class TelaListaUsuarios extends React.Component {

    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers: {
                Authorization: 'yara-nascimento-lovelace'
            }
        })
            .then((res) => {
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert('Ocorreu um problena, tente novamente')
            })
    }


    deletarUsuaro = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: 'yara-nascimento-lovelace'
            }
        })
            .then((res) => {
                alert('Usuário(a) deletado com sucesso!!!')
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert('Ocorreu um erro, tente novamente')

            })
    }


    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuaro(user.id)}>x</button>
                </CardUsuario>
            )

        })




        return (
            <div>
                <section className='container'>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
                </section>
            </div>
        )
    }
}