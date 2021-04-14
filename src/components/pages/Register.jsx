import '../css/Register.css';
import Signin from '../signin';
import Signup from '../Signup';
import Forget from '../Forget';
import { Route} from 'react-router-dom';
const Register = () =>{
    return(
    <>
    <div className="container-fluidx">
        <div className="registerbox">
            
            <div className="row gx-0 m-0">
                <div className="col-md-5 col-sm-12 col-12" style={{backgroundColor:"rgb(48, 48, 99)"}}>
                    <div className="row m-4">
                       <div className="col-md">
                           <h3 className="text-center" style={{color: "white"}}>MyShop.com</h3>
                       </div> 
                    </div>
                    <div className="row m-4">
                        <div className="col-md " style={{color: "rgb(160, 154, 154)"}}>
                            
                           <p className="text-center">Login using Social media to get quick access</p>
                        </div> 
                     </div>
                     <div className="row m-4">
                        <div className="col-md">
                            <button  className="facebook"><i className="fa fa-facebook m-2"></i>Signin with facebook</button>
                        </div> 
                     </div>
                     <div className="row m-4">
                        <div className="col-md">
                            
                            <button  className="twitter"><i className="fa fa-twitter m-2"></i>Signin with twitter</button>
                        </div> 
                     </div>
                     <div className="row m-4">
                        <div className="col-md">
                           
                            <button  className="google"><i className="fa fa-google m-2"></i>Signin with google</button>
                        </div> 
                     </div>
                </div>
                <div className="col-md-7 p-4 col-sm-12 col-12 mx-auto" id="formbox" >
               
      <Route exact path="/Register" component={Signup}/>
      <Route exact path="/Register/Signin" component={Signin} />
      <Route exact path="/Register/Forget" component={Forget} />

                </div>
                </div>
                </div> 
                </div>
            
                   

    </>
    )
}

export default Register;

