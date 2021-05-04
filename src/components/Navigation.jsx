import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/images.png';

import './css/Navigation.css';
import {Navbar,Nav} from 'react-bootstrap';

export default function Navigation() {
    return (
       <div>
<div className="container-fluid m-0 p-0" >

<Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
<Navbar.Brand href="/Contact">
  <div className=" text-white">
<img src={logo1} className="img-fluid rounded-circle px-2" alt="img" style={{ height:"50px"}}/>
MyShop.<span className="brand">com</span> </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    <Nav.Link  href="/">Home</ Nav.Link>
    
    <Nav.Link  href="/Register">Register </ Nav.Link>
    
    <Nav.Link  href='/Contact' tabindex="-1" aria-disabled="true">Contact us</ Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
    {/* <div className="row gx-0 m-0">
        <div className="col-md m-0 p-0 ">
        <nav className="navbar navbar-expand-lg navbar-light mb-0">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white" to="/Contact">
                        <img src={logo1} className="img-fluid rounded-circle px-2" alt="" style={{ height:"50px"}}/>
                        MyShop.<span className="brand">com</span> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/Register">Register</NavLink>
                        </li>
                      
                        <li className="nav-item">
                        <NavLink className="nav-link  text-white" to='/Contact' tabindex="-1" aria-disabled="true">Contact us</NavLink>
                        </li>
                    </ul>
                   
                    </div>
                </div>
           </nav>

        </div>
    </div> */}
</div>

            
       </div>
    )
}
