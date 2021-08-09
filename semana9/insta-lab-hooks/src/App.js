import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"


const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`

const App = () => {
  return (
    <AppContainer>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://scontent.frec36-1.fna.fbcdn.net/v/t1.6435-9/227712301_2946717192311840_3082962382209076395_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=174925&_nc_ohc=z1yEYlZoRHsAX84RX_m&_nc_ht=scontent.frec36-1.fna&oh=a5e04242fdc33511625640dede7d930d&oe=6137E478'}
        fotoPost={'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/11/rick-and-morty-season-5-ideas-00.jpg'}
      />
    </AppContainer>
  );
}


export default App;
