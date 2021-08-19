import React from 'react'
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApplicationFormPage } from './pages/ApplicationFormPage';


export default function App() {
  return (


      <BrowserRouter>
      <Switch>
    
    <Route exact path={'/'}>
      <HomePage />
      </Route>


      <Route exact path={'/ListTripsPage.js'}>
      < ListTripsPage/>
      </Route>

     
      <Route exact path={'/LoginPage.js'}>
     <LoginPage />
      </Route>

      <Route exact path={'/ApplicationFormPage.js'}>
     <ApplicationFormPage/>
      </Route>

      </Switch>
      </BrowserRouter>
  
  );
}
