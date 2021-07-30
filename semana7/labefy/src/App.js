import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Teste = styled.div`
  display: flex;
  color: pink;
  border: 1px solid black;
  justify-content: center;
  height: 100px;
  background-color: red; 

`
const Teste1 = styled.div` 
  display: flex;
  justify-content: center;
  color: pink;

`

const Corpo = styled.div`
   display: flex;
  color: pink;
  border: 1px solid black;
  justify-content: center;
  height: 500px;
  text-align: center;
`

export default class App extends React.Component {

  render() {
    return (
      <div>

        <div>
          <Teste>
            <h1>Labefy</h1>
          </Teste>
        </div>

        <div>
          <Teste1>
          <h2>PlayList</h2>
          </Teste1>
        </div>

        <div>
        <Corpo>
        <div>
        <h4>Criação de PlayList</h4>
        <input type="text" name="search" placeholder="Nome da musica" />
        <input type="text" name="search" placeholder="Nome do artista" />
        <input type="text" name="search" placeholder="URL da música" />
        <input type="submit" value="Enviar" />
        </div>
        </Corpo>
        </div>

      </div>






    )
  }

}