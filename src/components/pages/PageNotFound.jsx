import React from 'react'
import {NavLink } from 'react-router-dom';
import PageNotFoundimg from '../../images/404.jpg'

export default function PageNotFound() {
    return (
        <>
        <div className='justify-content-center d-flex ' style={{backgroundColor:'black',height:'100vh'}}>
        <div className='justify-content-center d-flex-column  my-4' >

            
             <div className="row">
                 <img src={PageNotFoundimg} alt="" style={{borderRadius:'10px'}}/>

             </div>
             <div className="row gx-0 m-0 ">
                                
            <div className="col-md col-sm-6 col-6 m-2">
                <NavLink to='/' className="text-decoration-none"><button className="btn btn-warning">Go To Home Page</button></NavLink>
            </div>
             </div>
        </div>
        </div>
        </>
    )
}
