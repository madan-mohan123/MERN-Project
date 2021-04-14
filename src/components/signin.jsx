import { NavLink, Redirect } from "react-router-dom"
import React,{useState } from 'react'
import axios from 'axios'

const Signin = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [login, setlogin] = useState(false);
    const [shopName, setshopName] = useState('')

    const onsubmit=(e)=>{
        e.preventDefault();
        const mydata={
        
            email:email,
            password:password
        }

        axios.post(
            'http://localhost:5000/get_auth',
            mydata
        )
        .then(res=>{
            console.log(res.data.Auth)
           
            if(res.data.Auth){
                alert("successfully Login");
                setlogin(true);
               setshopName(res.data.ShopName)
            }
            else{
                alert("Wrong Email Id Or Password");  
            
               
            }
        })
        .catch(err=>{
            alert("OOPs! Something Wrong " + err)
        })
   

    }

    return(    
<>
{login ? <Redirect to={{pathname:"/Dashboard",state:{"email":email,"shopName":shopName}}} /> : "" }
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
                                <input type="text" placeholder="Email Address" name="email" onChange={(e)=>{setemail(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <input type="password" placeholder="PassWord" name="password" onChange={(e)=>{setpassword(e.target.value)}}/>
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

</>
    );
}

export default Signin;