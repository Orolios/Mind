import React from 'react';

import Login from './Login';
import Singin from './Singin';
import Admin from './Admin';

import {BrowserRouter,
    Route,
    Switch,
    Redirect
}  from "react-router-dom";

const Routes = () =>(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/Singin" component={Singin}/>
    <Route path="/Admin" component={Admin}/>
    </Switch>
    </BrowserRouter>
)
 export default Routes;
