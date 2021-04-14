import React from 'react';
import logoimg from '../images/shopify.png'
import {Dropdown} from 'react-bootstrap';

const Searchnav=()=>{


    return(
        <>
            <nav>
        <div className="row mx-0 px-0 gx-0 " style={{"backgroundImage": "linear-gradient(red,white)"}}>
            <div className="col-md-10 mx-auto  p-2">
                <div className="row">
                    <div className="col-md-2 d-flex flex-row">
                        <img src={logoimg} style={{'borderRadius':'2px'}} height="40px" alt="" />
                        <h6 className="p-2">MyShop.com</h6>
                    </div>
                    <div className="col-md-6">
                    <div class="input-group">
                   
            <span class="input-group-text bg-grey m-0 p-0 border-none">
            <Dropdown style={{'display':'inline',}}>
                <Dropdown.Toggle variant="mute" >
                </Dropdown.Toggle>
                <Dropdown.Menu style={{'backgroundColor':'grey'}}>
                    <Dropdown.Item to="#/action-1">Electronics</Dropdown.Item>
                    <Dropdown.Item to="#/action-2">Mobiles</Dropdown.Item>
                    <Dropdown.Item to="#/action-3">Wedding</Dropdown.Item>
                    <Dropdown.Item to="#/action-1">Interior</Dropdown.Item>
                    <Dropdown.Item to="#/action-2">Clothes</Dropdown.Item>
                    <Dropdown.Item to="#/action-3">Shoes</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </span>
       
        <input class="form-control " placeholder="Search here ..."/> 
    </div>
                        
                        
                    </div>
                    <div className="col-md-4 ">
                        <button className="btn  mx-4 px-4 bg-warning text-white" ><i class="fa fa-sign-in" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>Login</button>
                        <button className="btn btn-secondary mx-4 px-4"><i class="fa fa-cart-arrow-down" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>Cart</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </nav>

        </>
    )

}

export default Searchnav;