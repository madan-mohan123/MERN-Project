import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../Navigation'
import laptop from '../../images/laptop.jpg';
import iphone from '../../images/iphone.jpg';
import jeans from '../../images/j2.jpg';
import lh1 from '../../images/lh1.png';

import headphone from '../../images/mobile/head.jpg';
import giga from '../../images/mobile/giga.jpg';
import realmex2 from '../../images/mobile/realmex2.jpg';

import '../css/Navigation.css';


export default function Home() {
    return (
        <div>
            < Navigation />
            <div className="row gx-0 banner m-0"  >
                <div className="col-md d-flex justify-content-center align-items-center p-4" >
                    <div className="box m-4">
                        <div className="row p-2"><h1>Grow Your Buisness With US</h1></div>
                        <div className="row p-2"><h2>World Ready shop for You</h2></div>
                        <div className="row p-2"><h3>Share your Thoughts ? To Grow your Shop</h3></div>
                        <button className="p-2 m-2 btn-start"><NavLink to="/Dashboard/"  className="text-white text-decoration-none">Start from here</NavLink></button>
                        <button className="p-2 m-2 btn-start"><NavLink to="/Search/"  className="text-white text-decoration-none">Go To Products</NavLink></button>
                    </div>
                </div>
                <div className="col-md d-flex justify-content-center align-items-center p-4"> </div>
            </div>


            <section id="heading" className="pt-4">
                <h1 className="text-center mt-4 mb-4">For Distributor</h1>
                <h2 className="text-center mt-4 mb-4 text-primary">Not a Distributer? Get Your Business Idea With Myshop</h2>
            </section>

      
            <div className="row gx-0 m-0" >
                <div className="col-md-10 mx-auto" >
                    <div className="row" >
   
                <div className="col-md col-sm-6 col-10 mx-auto "> 
                <div className="card m-4" >
                <div className="gal-img-con position-relative ">
                <img src={giga} className="card-img-top img-fluid" alt="..." />
                <div className="overlay">
                    <h4>Giga</h4>
                </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Giga</h5>
                    <button className="btn btn-warning">Shop now</button>
                
                </div>
            </div>
            </div>
                <div className="col-md col-sm-6 col-10 mx-auto  ">
                <div className="card m-4" >
                <div className="gal-img-con position-relative ">
                <img src={realmex2} className="card-img-top" class="img-fluid" alt="..." />
                <div className="overlay">
                    <h4>Realme x2</h4>
                </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Realme x2</h5>
                    <button className="btn btn-warning">Shop now</button>
                </div>
            </div>
            </div>
                <div className="col-md col-sm-6 col-10 mx-auto  ">
                <div className="card m-4" style={{width: "18rem;"}} >
                <div className="gal-img-con position-relative ">
                <img src={headphone} className="card-img-top" alt="..." />
                <div className="overlay">
                    <h4>Headphones</h4>
                </div>
                </div>
                <div className="card-body" >
                    <h5 className="card-title text-center">Boat Headphone</h5>
                    <button className="btn btn-warning">Shop now</button>
                </div>
            </div> 
            </div>
            </div>
            </div>
                </div>


            
    <section id="description " >
        <h1 className="text-primary text-center my-4">Know About us ? </h1>
        <div class="row   gx-0 m-0" >
            <div class="col-md p-5" >
                <img src={laptop} alt="" className="img-fluid"  style={{borderRadius:'30px 0 0px 0', boxShadow: '0 0 5px rgb(98, 238, 243);'}}/>
            </div>
            <div class="col-md p-5">
                <h1 className="text-warning">About Myshop</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, provident.
                     Illo at autem, temporibus iusto natus voluptas laborum nemo perferendis, fuga mollitia non 
                     
                     aspernatur ipsam, sequi doloremque soluta praesentium earum ex! Harum modi illum beatae vel 
                     repudiandae natus nisi facilis, minima odit. Quia, voluptas magnam. Aperiam ut aspernatur ab iusto.</p>
            </div>
        </div>
        <hr/>
        <div class="row   gx-0 m-0" >
            
            <div class="col-md p-5">
                <h1 className="text-warning">About Myshop</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, provident.
                     Illo at autem, temporibus iusto natus voluptas laborum nemo perferendis, fuga mollitia non 
                     
                     aspernatur ipsam, sequi doloremque soluta praesentium earum ex! Harum modi illum beatae vel 
                     repudiandae natus nisi facilis, minima odit. Quia, voluptas magnam. Aperiam ut aspernatur ab iusto.</p>
            </div>
            <div class="col-md p-5">
                <img src={iphone} alt="" className="img-fluid" style={{borderRadius:'0px 0 30px 0',boxShadow: '0 0 5px rgb(98, 238, 243);'}} />
            </div>
        </div>
    </section>


    <section >
    <h1 className="text-center text-primary my-4">Gallery</h1>
        <div className="gallery row  my-4 mx-0 gx-0 d-grid" >
           
            <div className="col-md-3 col-sm-4 col-6 py-2 ">
                <div className="gal-img-con position-relative ">
                <img src={jeans} className="img-fluid " alt="jkjl"  />
                <div className="overlay">
                    <h4>Stylish Jeans</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2">
            <div className="gal-img-con position-relative ">
                <img src={lh1} className="img-fluid" alt="jkjl" />
                <div className="overlay">
                    <h4>Lehanga</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2">
            <div className="gal-img-con position-relative ">
                <img src={realmex2} className="img-fluid" alt="jkjl" />
                <div className="overlay">
                    <h4>Realme x2</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2">
            <div className="gal-img-con position-relative ">
                <img src={giga} className="img-fluid" alt="jkjl" />
                <div className="overlay">
                    <h4>Giga Mobile</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2">
            <div className="gal-img-con position-relative ">
                <img src={headphone} className="img-fluid" alt="jkjl"  />
                <div className="overlay">
                    <h4>Boat Headphone</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2">
            <div className="gal-img-con position-relative ">
                <img src={lh1} className="img-fluid" alt="jkjl" />
                <div className="overlay">
                    <h4>Gown</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2">
            <div className="gal-img-con position-relative ">
                <img src={realmex2} className="img-fluid" alt="jkjl" />
                <div className="overlay">
                    <h4>Realme x2</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2">
            <div className="gal-img-con position-relative ">
                <img src={lh1} className="img-fluid" alt="jkjl" />
                <div className="overlay">
                    <h4>Lahenga</h4>
                </div>
                </div>
            </div>
        </div>
        
    </section>
      
            </div>
    )
}
