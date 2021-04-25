import React from 'react'
import cont from '../../images/contact.jpg';
import Navigation from '../Navigation';
export default function Contact() {
    return (
        <div className="container-fluid m-0 p-0 text-white" style={{backgroundColor:'rgb(58, 56, 56)',height:'100vh'}}>
           
            <Navigation />
            <div className="row gx-0 mt-4 mx-0">
                <div className="col-md-6 ">    
            <h1 style={{color:'blue'}}>Contact Us</h1>

            <h2>
                We are With You 
            </h2>

            <form className="row gx-0 mx-0">
  <div className="col-md-12 m-2">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
 
  <div className="col-md-12 m-2">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress"  />
  </div>
  <div className="col-md-12  m-2">
    <label for="inputAddress2" className="form-label">Message</label>
    <div>
    <textarea name="" id="" cols="25" rows="5"></textarea>
    </div>
  </div>
 
  
 
  <div className="col-md-12 m-2">
    <button type="submit" className="btn btn-primary">Send</button>
  </div>
</form>
</div>
<div className="col-md-6">
<div className=" d-flex justify-content-center" >
                <img src={cont} alt="" height='400px' width="100%"style={{'borderRadius':'20px'}} />
            </div>
</div>

            </div>
            <h1 className="text-center " style={{marginTop:'30px'}}>MyShop.com</h1>
        </div>
    )
}