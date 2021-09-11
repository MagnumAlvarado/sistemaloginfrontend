import React from 'react'

import { Router, switch, Route } from 'react-router'

import Login from '../pages/login/Login'
import Register from '../pages/Register'
import Home from '../pages/home/Home'
import NotFound from './NotFound'

import { History } from '..//history'

const Routes = () => (
    <Router history={history>
        <Switch>
            <Route component={Login} exact path="/Login"/>
            <Route component={Register} exact path="/Register"/>
            <Route component={Home} exact path="/Home"/>  
            <Route component={NotFound}/>         
        </Switch>
    </Router>
)