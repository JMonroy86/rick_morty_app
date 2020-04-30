import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Char = (props) => {
    console.log(props.match.params.id);
    const { store, actions } = useContext(Context);
    useEffect(() => {
        if (props.match.params.id !== null) {
            actions.getChar(props.match.params.id)
        }
    }
        , [props.match.params.id]) // ESTE USEEFFECT ES PARA EVITAR EL LOOP, ES EQUIVALENTE A UN COMPONENTDIDMOUNT. LO MÀS IMPORTANTE SON LAS []
    console.log(store.active);

    return (
        <>
            {
                store.active !== null ?
                    (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="avatar border-avatar mx-auto">
                                        <img src={store.active.image} className="rounded-circle img-responsive" alt="Example photo" />
                                    </div>
                                </div>
                                <div className="col-md-8 pl-5 pt-5">
                                    <h1 className="title-char">{store.active.name}</h1>
                                    <h2 className="mytext-char text-black-50">{store.active.species+ " - " + store.active.status}</h2>
                                   {
                                       store.active.origin !=null && 
                                       (
                                        <h2 className="mytext-char text-black-50">{store.active.origin.name}</h2>
                                       )
                                   }
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <h1></h1>
        )
            }
            
        </>
    )
}

export default Char;