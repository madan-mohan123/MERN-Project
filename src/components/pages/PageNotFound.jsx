import React from 'react'
import {NavLink } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <>
        <div className='justify-content-center d-flex'>
        <div className='justify-content-center d-flex-column  my-4' >
            <h1>Page Not Found</h1>
            <div className="row m-2 p-2 ">
                                
                                <div className="col-md col-sm-6 col-6   p-2">
                                    <NavLink to='/'>Go To Home Page</NavLink>
                                </div>
                            </div>
        </div>
        </div>
        </>
    )
}
