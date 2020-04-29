import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'
import Carousel from '../components/carousel';
import Hight from '../img/hight.gif'


let items = [];


const Episode = props => {
    const { store, actions } = useContext(Context);
    console.log(store.episodes.results)

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };


    useEffect(() => {
        if (store.episodes.results != null) {
            const results = store.episodes.results.filter(item => item.name.toString().toLowerCase().includes(searchTerm));
            setSearchResults(results);
        }
    }, [store.episodes.results,searchTerm]);

    return (
        <div className="container">
            <div className="row">
                <Carousel />
                <div className="col-md-12 mt-4 pt-4">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="What are u' looking about @lso?" value={searchTerm} onChange={handleChange} />
                        </div>
                    </form>
                </div>

                {
                    store.episodes.results != null ?

                        (
                            <div className="row">
                                {searchResults.map((item, i) => (
                                    <>
                                        <div className="col-md-4 p-1">
                                            <div className="media border border-light rounded-sm">
                                                <img src={"../episodes/" + item.id + ".jpg"} width=" 100" className="mr-3 rounded-left" alt="..." />
                                                <div className="media-body mytext">
                                                    <h5 className="mt-0 title-media">{item.name}</h5>
                                                    <span><h6 className="px-2">{"On Air: "+item.air_date}</h6><h6 className="px-2">{"Season: "+item.episode}</h6></span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>

                        )
                        : (
                            <img src={Hight} className="d-block w-50 mx-auto" alt="..." />
                        )
                }

                {/* <Carousel /> */}
            </div>


        </div>


    )
}
export default Episode;