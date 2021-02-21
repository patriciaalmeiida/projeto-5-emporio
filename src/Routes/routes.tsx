import React from 'react'
import { Route , Switch } from 'react-router-dom'
import Login from '../Pages/Login/login'
import Home from '../Pages/Home/home'


const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={Home}/>
        </Switch>
    )
}

export default Routes;