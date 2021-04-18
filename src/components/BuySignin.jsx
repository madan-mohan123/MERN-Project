import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class BuySignin extends Component {
    render() {
        return (
            <div  id="loginformbox">
                        <form  id="loginform">
                            <div className="row m-4 d-flex justify-content-center">
                                <h3 className="text-center">Login to your account</h3>
                            </div>
                            <div className="row m-4 d-flex justify-content-center">
                                <p className="text-center">Don't have an account?<NavLink to="/Register/" id="signupformlink">Sign Up Free!</NavLink></p>
                            </div>
                            <div className="row">
                                <div className="col-md m-2 ">
                                <input type="text" placeholder="Email Address" name="email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <input type="password" placeholder="PassWord" name="password" />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md m-2">
                                    <div className="form-group">
                                        <input type="checkbox" name="" id="Remember" style={{width: "initial",marginRight:"5px"}} />
                                        <label for="Remember">Remember me</label>
                                    </div>
                                
                                </div>
                                <div className="col-md m-2">
                                    <span><NavLink to="/Register/Forget" id="forgetlink">Forget password?</NavLink></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <button className="btn-primary p-2" style={{width: "100%",borderRadius:"10px"}} onClick={onsubmit}>Login with email</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
        )
    }
}
