import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext'
import Rik from '../img/rik.gif'

const Login = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12  py-5">
                    <div className="card login-card border-dark mx-auto">
                        <div className="card-up sunny-sunset-gradient">
                        </div>
                        <div className="avatar mx-auto">
                            <img src={Rik} className="rounded-circle img-responsive" alt="Example photo" />
                        </div>
                        <div className="card-body ">
                            <h4 className="card-title text-center title-login mt-1">LOGIN</h4>
                            <hr />
                            <form onSubmit={e => actions.login(e, props.history)}>
                                <div className="form-group">
                                    <label className="title-login-form" htmlFor="exampleInputEmail1">Email address</label>
                                    <input  className="form-control" placeholder="Enter email" type="email" id="username" name="username"
                    value={store.username}
                    onChange={actions.handleChange} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label className="title-login-form" htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={store.password} onChange={actions.handleChange} placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label title-login-form" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3 float-right">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;