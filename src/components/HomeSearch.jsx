import laptop from '../images/laptop.jpg';
import jeans from '../images/j3.jpg';
import item from '../images/lh6.jpg';
import hbanner from '../images/ban/ban3.jpg';
import ban2 from '../images/ban/ban1.jpg';
import ban3 from '../images/ban/ban2.jpg';
import {Carousel} from 'react-bootstrap';
import axios from 'axios'
import { Route,NavLink } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
const Homesearch=()=>{

    const [dataList, setDataList] = useState([])
    useEffect(() => {
 
        axios.post('http://localhost:5000/get_items').then((res)=>{
            
            setDataList(res.data)

        }).catch((gh)=>{
           
});
        });
    return (
<>
   <section className="m-2 p-2" >
        <h3 className='mx-2'>Trending</h3>
        <div className="slider m-2">
          
            <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={hbanner}
      alt="First slide"
      height="400px"
    />
    <Carousel.Caption>
      <h2>Diwali Sale</h2>
      <p>Get 50% Discount On Each Item</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={ban2}
      alt="Second slide"
      height="400px"
    />
    <Carousel.Caption>
      <h2>Join To us To Get More Benefits</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ban3}
      alt="Third slide"
      height="400px"
    />
    <Carousel.Caption>
      <h2>Thousands of customer who get discount</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    </section>

    <section className="mx-2" >
        <div>
            <div className="row gx-0 mx-0 my-2 p-2" >
                <div className="col-md-6 ">
                    <h4>Best Appliance's</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-primary text-white mx-4 px-4 "><NavLink to="/Search/explore/" className='text-white decoration-none'>View All</NavLink></button>
                </div>
            </div>
           
        </div>
        <hr />
        <article>
            <div className="row gx-0 m-0">
            {dataList.map((key,index)=>{
                                       return(
                                        
                                        <div className="col-md-2 p-2">
                                        <div className="card border-0">
                                            <img src={laptop} alt="" />
                                            <div className="card-body">
                                                <p className="card-title text-center">{key.Shopname}</p>
                                                <p className=" m-0 p-0 text-center">{key.Brand}</p>
                                                <p className="m-0 p-0 text-center">{key.Cost}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                
                                       )})}
    
            </div>

        </article>
    </section>

    <section className="mx-2">
        <div>
            <div className="row gx-0 mx-0 my-2 p-2">
                <div className="col-md-6 ">
                    <h4>Men's Footwear</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-primary mx-4 px-4 ">View All</button>
                </div>
            </div>
           
        </div>
        <hr />
        <article>
            <div className="row gx-0 m-0">
            {dataList.map((key,index)=>{
                                       return(
                                        <div className="col-md-2 p-2">
                                        <div className="card border-0">
                                        <img src={jeans} alt="" />
                                            <div className="card-body">
                                                <p className="card-title text-center">{key.Shopname}</p>
                                                <p className=" m-0 p-0 text-center">{key.Brand}</p>
                                                <p className="m-0 p-0 text-center">{key.Cost}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                       )})}
               
                
                
            </div>

        </article>
    </section>

    <section className="mx-2">
        <div>
            <div className="row gx-0 mx-0 my-2 p-2">
                <div className="col-md-6 ">
                    <h4>Women's Wear</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-primary mx-4 px-4 ">View All</button>
                </div>
            </div>
           
        </div>
        <hr />
        <article>
            <div className="row gx-0 m-0">
            {dataList.map((key,index)=>{
                                       return(
                                        <div className="col-md-2 p-2">
                                        <div className="card border-0">
                                        <img src={item} alt="" />
                                            <div className="card-body">
                                                <p className="card-title text-center">{key.Shopname}</p>
                                                <p className=" m-0 p-0 text-center">{key.Brand}</p>
                                                <p className="m-0 p-0 text-center">{key.Cost}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                       )})}
               
                
                
            </div>

        </article>
    </section>


</>


    )
}

export default Homesearch;