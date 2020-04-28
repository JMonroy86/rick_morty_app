import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'
import Carousel from '../components/carousel';
import Hight from '../img/hight.gif'


let items = [];


const Home = props => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="container">
            <div className="row">
                <Carousel />
                <div className="col-md-12 mt-4 pt-4">
                    
                </div>
            </div>


        </div>


    )
}
export default Home;