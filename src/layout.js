import React from 'react'
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


const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Episode" component={Episode} />
                    <Route exact path="/Characters" component={Characters} />
                </Switch>

            </BrowserRouter>
        </>

    )
}
export default injectContext(Layout);