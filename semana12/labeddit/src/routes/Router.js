import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroPage from '../pages/CadastroPage/CadastroPage'
import ListPostPage from '../pages/ListPostPage/ListPostPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'


const Router = () => {
    return (

        <BrowserRouter>
            <Switch>
                

                <Route exact path='/'>
                <LoginPage/>
                </Route>

                <Route exact path='/cadastro'>
                    <CadastroPage/>
                </Route>

                <Route exact path='/lista/post/:id'> 
                    <ListPostPage/>
                </Route>

                <Route exact path='/post'>
                    <PostPage/>
                </Route>

            </Switch>

        </BrowserRouter>


    )
}
export default Router