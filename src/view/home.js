import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'
import Carousel from '../components/carousel';
import History from '../components/history';
import Season1 from '../img/intros/season1.jpg'
import Season2 from '../img/intros/season2.jpg'
import Season3 from '../img/intros/season3.jpg'
import Justin from '../img/intros/Justin_Roiland.jpg'
import Dan from '../img/intros/Dan_Harmon.jpg'
import Videomodal from '../components/video'
import Creator from '../components/creator';


let items = [];


const Home = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <Carousel />
            </div>
            <div className="row">
                <History />
            </div>
            <div className="row py-5">
                <Creator photo_avatar={Justin} photo_avatar2={Dan} />
            </div>
            <div className="row">
                <div className="col-md-4 mt-4 py-4">
                    <div class="card bg-dark border-1 rounded text-white">
                        <img src={Season1} class="card-img" alt="..." />
                        <Videomodal id="E6TUs69Cw94" name="Season 1" description="Opening" />
                    </div>
                </div>
                <div className="col-md-4 mt-4 py-4">
                    <div class="card bg-dark border-1  rounded text-white">
                        <img src={Season2} class="card-img" alt="..." />
                        <Videomodal id="TW5z-ZjfpxM" name="Season 2" description="Opening" />
                    </div>
                </div>
                <div className="col-md-4 mt-4 py-4">
                    <div class="card bg-dark border-1  rounded text-white">
                        <img src={Season3} class="card-img" alt="..." />
                        <Videomodal id="UYD8dCLBQIA" name="Season 3" description="Opening" />
                    </div>
                </div>
            </div>


        </div >


    )
}
export default Home;