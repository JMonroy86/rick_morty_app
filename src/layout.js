import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import injectContext from './store/appContext';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

import Home from './view/home'
import Episode from './view/episode'
import Characters from './view/characters'
import Navbar from './components/navbar';
import Login from './view/login';
import Char from './view/char';
import Notfound from './view/notfound';
import MasterRoute from './layouts/master_layout'


const Layout = () => {
    
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <MasterRoute exact path="/Episode" component={Episode} />
                    <MasterRoute exact path="/Characters" component={Characters} />
                    <Route exact path="/Login" component={Login} />
                    <MasterRoute exact path="/Character/:id" component={Char}  />
                    <Route component={Notfound} />
                </Switch>

            </BrowserRouter>
        </div>

    )
}
export default injectContext(Layout);