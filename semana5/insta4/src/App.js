import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div>
      <div>
      <MainContainer>
        <Post
          nomeUsuario={'Tacy Summy'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOsGyDGFYzOgCyxgVZ931wWjOBxVl4zMmiQ&usqp=CAU'}
          fotoPost={'https://a-static.mlcdn.com.br/1500x1500/quadro-decorativo-rick-and-morty-anime-desenho-com-moldura-g02-vital-quadros/vitalquadrosdobrasil/9909808040/f7e02cd5ae7e65695f170951f86198f1.jpg'}
        />
      </MainContainer>
      </div>

      <div>
      <MainContainer>
        <Post
          nomeUsuario={'Rick Verissimo'}
          fotoUsuario={'https://pm1.narvii.com/6335/a61407611ecb2043698c2b58e6371f8aaa3ad891_hq.jpg'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2ySt6PCoFyxZ9O3ysMUUqxBUGgx_PTQGCQ&usqp=CAU'}
        />
      </MainContainer>
      </div>

      <div>
      <MainContainer>
        <Post
          nomeUsuario={'Tacy Rick'}
          fotoUsuario={'https://i.imgur.com/pqgsCkug.png'}
          fotoPost={'http://pm1.narvii.com/6953/78d4f295389e76d5c7ff572cd71875592017bda7r1-512-288v2_uhq.jpg'}
        />
      </MainContainer>
      </div>

      </div>
      
    );
  }
}

export default App;
