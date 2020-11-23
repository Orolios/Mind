import React from 'react';

import Login from './pages/Login/Login';
import Singin from './pages/Singin/Singin';
import Admin from './pages/Admin/Admin';
import Error from './pages/404';

import {BrowserRouter,
    Route,
    Switch,
    Redirect
}  from "react-router-dom";

import {isAuthenticated} from './auth';

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route{...rest} render = {props=>
        isAuthenticated() ? (
            <Component{...props}/>
        ) : (
            < Redirect to ={{pathname:'/' , state:{from: props.location} }} />
    )
}
    />
);



const Routes = () =>(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/Singin" component={Singin}/>
    <PrivateRoute path="/Admin" component={Admin}/>
    <Route path="" component={Error}/>
    </Switch>
    </BrowserRouter>
)
 export default Routes;
