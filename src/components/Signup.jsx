import { NavLink,Redirect  } from "react-router-dom"
import axios from 'axios'
import React,{useState} from 'react'

  
const Signup = () =>{
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const [signup, setsignup] = useState(false);

    const onsubmit=(e)=>{
        e.preventDefault();

const mydata={
    username:username,
    email:email,
    password:password
}
        if(email!=="" && username!=="" && password!==""){
        if(password===repassword){
        axios.post(
            'http://localhost:5000/save_auth',
            mydata
        )
        .then(res=>{
            if(res.data===false){
                alert("Account Exist, Try another Account");
            }
            else if(res.data===true){
                alert("Account successfully created ? ")
                setsignup(true)  
            }
           
        })
        .catch(err=>{
            alert("OOPs! Something Wrong")
        })
    }

    else{
        alert("Password Mismatch")
    }
}
else{
    alert("Field cannot be empty")
}

    }
    return(
      <>
      
      {signup ? <Redirect to={{pathname:"/Register/CreateShop",state:{"email":email}}} /> : 
                  <div  id="signupformbox" >
                        <form  id="signupform" >
                            <div className="row m-4">
                                <h3 className="text-center">Signup for Free</h3>
                            </div>
                            <div className="row">
                                <div className="col-md m-2 ">
                                    <input type="text" placeholder="Username" name="email" onChange={(e)=>{setusername(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2 ">
                                    <input type="text" placeholder="Email Address" name="email" onChange={(e)=>{setemail(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                    <input type="password" placeholder="PassWord" name="password" onChange={(e)=>{setpassword(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                    <input type="password" placeholder="RePassword" name="repassword" onChange={(e)=>{setrepassword(e.target.value)}}  />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <p>I agree to <span><NavLink to="#">privacy Policy</NavLink></span> and <span><NavLink to="#">Terms of Services</NavLink></span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <button className="btn-primary p-2" style={{width: '100%',borderRadius:'10px'}} onClick={onsubmit}>Sign up with email</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <p className="text-center"><NavLink to="/Register/Signin" id="loginformlink">Already have an account?</NavLink></p>
                                </div>
                            </div>
                        </form>
                     </div>
}

                     

        </>
    );
}

export default Signup; 