import React from 'react';
import Photo1 from '../img/carousel/photo1.jpg'
import Photo2 from '../img/carousel/photo2.jpg'
import Photo3 from '../img/carousel/photo3.jpg'


const Carousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleControls" className="carousel slide carousel-fade " data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Photo1} className="d-block w-100 rounded-lg" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Photo2} className="d-block w-100 rounded-lg" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Photo3} className="d-block w-100 rounded-lg" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;