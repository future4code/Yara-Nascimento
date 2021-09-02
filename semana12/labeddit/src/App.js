import React from 'react'
import theme from './constants/theme';
import  Router  from './routes/Router';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router/>
    </ThemeProvider>
  )
}

export default App;
