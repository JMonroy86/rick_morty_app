import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'

const Characters = () => {
    const { store, actions } = useContext(Context);
    console.log(store.characters)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">

                        {
                            store.characters.results != null ?
                                (
                                    store.characters.results.map((char, i) => {
                                        return (
                                            <div key={i} className="col-md-4 pt-4">
                                                <div className="card testimonial-card border-dark">

                                                    <div className="card-up sunny-morning-gradient">
                                                    </div>

                                                    <div className="avatar mx-auto">
                                                        <img src={char.image} className="rounded-circle img-responsive" alt="Example photo" />
                                                    </div>

                                                    <div className="card-body">
                                                        <h4 className="card-title title mt-1">{char.name}</h4>
                                                        <hr />
                                                        <div className="row mytext-card">
                                                            <div className="col-md-6">
                                                                <p><i className="fas fa-quote-left pr-1"></i> Especie: {char.species}</p>
                                                                <p><i className="fas fa-quote-left pr-1"></i> Gender: {char.gender}</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p><i className="fas fa-quote-left pr-1"></i> Status: {char.status}</p>
                                                                <p><i className="fas fa-quote-left pr-1"></i> Status: {char.origin.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to={"/Character/" + char.id}><h3 className="title text-decoration-none">Details</h3></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                                :
                                (
                                    <h1>loading</h1>
                                )
                        }


                        {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner"> */}

                        {/* if (episode.id == 1) {
                                                    carouselClass = "carousel-item active"
                                                }
                                                else {
                                                    carouselClass = "carousel-item"
                                                } */}
                        {/* <div class={carouselClass}>
                                    <img src={"../episodes/" + episode.id + ".jpg"} class="d-block w-100" alt="" />
                                </div>


                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <button onClick={() => actions.getCharacters(store.characters.info.next)}>NExt</button>
            <button onClick={() => actions.getCharacters(store.characters.info.prev)}>prev</button>
        </div>
    )
}
export default Characters;