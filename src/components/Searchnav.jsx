import React from 'react';
import logoimg from '../images/shopify.png'
import {NavLink} from 'react-router-dom';
function setSearchKeyWord(data){
    sessionStorage.setItem('searchKeyword',data)   
}
function setQuery(data){
    sessionStorage.setItem('searchQuery',data)    
}

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
            <select name="" onChange={(e)=>{setSearchKeyWord(e.target.value)}
                                    } id="" className='form-control '>
                    <optgroup>
                        <option value="Electronics">Electronic</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Menwear">Men wear</option>
                        <option value="Womenwear">Women wear</option>
                        <option value="all" selected>All</option>
                    </optgroup>
             </select>
          
            </span>
       
        <input class="form-control " placeholder="Search here ..." onChange={(e)=>{setQuery(e.target.value)}}/>
    
    </div>
                        
                        
                    </div>
                    <div className="col-md-4 ">

              <NavLink to='/Register/Signin' className="text-white text-decoration-none">
                <button className="btn  mx-4 px-4 bg-warning text-white" ><i class="fa fa-sign-in" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>
       Login
       </button>
        </NavLink>
        <NavLink to='/Register' className="text-white text-decoration-none">
                      <button className="btn btn-secondary mx-4 px-4"><i class="fa fa-cart-arrow-down" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>Cart</button>
                      </NavLink>
                 
                       </div>
                   
                </div>
            </div>
        </div>
    </nav>

        </>
    )

}

export default Searchnav;