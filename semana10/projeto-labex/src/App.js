import React from 'react'
import { HomeViagens } from './pages/HomeViagens'
import { AreaAdmin } from './pages/AreaAdmin'
import { Inscrever} from './pages/Inscrever'
import { ListaViagens} from './pages/ListaViagens'
import styled from 'styled-components'


const AppContainer = styled.div`
text-align: center ;
 text-align: center;

`





function App() {
  return (
    <AppContainer>

     <HomeViagens/>
     <hr />

     <AreaAdmin/>
     <hr />

    <ListaViagens/>
    <hr />

    <Inscrever/>
    <hr />

    </AppContainer>
  );
}

export default App;
