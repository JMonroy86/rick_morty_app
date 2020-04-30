import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'
import Carousel from '../components/carousel';
import Notfound from '../img/notfound.gif'


let items = [];


const Home = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4 pt-4">
                    <img className="img-fluid w-100" src={Notfound} alt=""/>
                </div>
            </div>


        </div>


    )
}
export default Home;