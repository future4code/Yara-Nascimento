import React from 'react'
import { CreateTripPage } from './pages/CreateTripPage';
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function App() {
  return (

    <div>

      <BrowserRouter>
      <Switch>
    
    <Route exact path={'/'}>
      <HomePage />
      </Route>


      <Route exact path={'/jsListTripsPage.'}>
      < ListTripsPage/>
      </Route>

     
      <Route exact path={'/LoginPage.js'}>
     <LoginPage />
      </Route>

      <Route exact path={'/CreateTripPage.js'}>
     <CreateTripPage/>
      </Route>



      </Switch>
      </BrowserRouter>

  </div>

  
  );
}
