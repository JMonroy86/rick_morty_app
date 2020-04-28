import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'



const Navbar = () => {
    return (
        <div className="container">
            <div className="row text-center pt-5">
                <div className="col-md-12 ">
                    <img src={Logo} className="img-fluid " alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-unstyled title list-inline text-center pt-3 text-dark-50">
                        <li className="list-inline-item px-5"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="list-inline-item px-5"><Link to="/Episode" className="text-decoration-none"> Episode </Link></li>
                        <li className="list-inline-item px-5"><Link to="/Characters" className="text-decoration-none"> Characters </Link></li>
                        <li className="list-inline-item px-5"><Link to="/Episode" className="text-decoration-none"> Episode </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;