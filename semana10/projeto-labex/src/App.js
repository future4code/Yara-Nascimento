import React from 'react'
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { CreateTripsPage } from './pages/CreateTripsPage'
import { TripeDetailsPage } from './pages/TripDetailsPage';
import { AdminHomePage } from './pages/AdminHomePage';



export default function App() {

 
  return (
      
     <> 
  <BrowserRouter>
      <Switch>
    
    <Route exact path={'/'}>
      <HomePage />
      </Route>


      <Route exact path={'/ListTripsPage'}>
      < ListTripsPage/>
      </Route>

     
      <Route exact path={'/LoginPage'}>
     <LoginPage />
      </Route>

      <Route exact path={'/ApplicationFormPage'}>
     <ApplicationFormPage/>
      </Route>

      <Route exact path={'/CreateTripPage'}>
     <CreateTripsPage/>
      </Route>

      <Route exact path={'/TripDetailsPage'}>
     <TripeDetailsPage/>
      </Route>

      <Route exact path={'/AdminHomePage'}>
     <AdminHomePage/>
      </Route>

      </Switch>
      </BrowserRouter>

  </>

  );
}
