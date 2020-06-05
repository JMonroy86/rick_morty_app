import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'

const Characters = () => {
    const { store, actions } = useContext(Context);
    console.log(store.location)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">

                        {
                            store.location.results != null ?
                                (
                                    store.location.results.map((location, i) => {
                                        return (
                                            <div key={i} className="col-md-4 p-1">
                                        <div className="media border border-light rounded-sm">
                                            {/* <img src={"../episodes/" + item.id + ".jpg"} width=" 100" className="mr-3 rounded-left" alt="..." /> */}
                                            <div className="media-body mytext">
                                                <h5 className="mt-0 title-media">{location.name}</h5>
                                                <h5 className="mt-0 title-media">{"Created: "+location.created}</h5>
                                                <span><h6 className="px-2">{"Type: " + location.type}</h6><h6 className="px-2">{"Dimension: " + location.dimension}</h6></span>
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


                        
                    </div>
                </div>
            </div>
            <button onClick={() => actions.getLocation(store.location.info.next)}>NExt</button>
            <button onClick={() => actions.getLocation(store.location.info.prev)}>prev</button>
        </div>
    )
}
export default Characters;