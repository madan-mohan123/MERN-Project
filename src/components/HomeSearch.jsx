import hbanner from '../images/ai.jpg';
import ban2 from '../images/ban/ban1.jpg';
import ban3 from '../images/ban/ban2.jpg';
import ban4 from '../images/loggdg.jpeg';

import {Carousel,Spinner} from 'react-bootstrap';
import axios from 'axios'
import {NavLink} from 'react-router-dom';
import React from 'react'
import  { Component } from 'react'


export default class HomeSearch extends Component {

 constructor(){
     super();
     this.state={
        dataListforMobiles:[],
        dataListforMen:[],
        dataListforWomen:[],
        dataListforElectronics:[],
        pageload:true
     }
 }
 imageLoaded=()=>{
this.setState({loading:false})
 }
 async componentDidMount(){

    await axios.post('https://myshop-12.herokuapp.com/getItemsforSearchPage',{"shopname":"Mobiles","limit":6}).then((res)=>{
                    console.log(res.data)
        this.setState({dataListforMobiles:res.data})
        // this.setState({pageload:false})
    }).catch((er)=>{
    
});
await axios.post('https://myshop-12.herokuapp.com/getItemsforSearchPage',{"shopname":"Electronics","limit":6}).then((res)=>{
            
        this.setState({dataListforElectronics:res.data})
        // this.setState({pageload:false})
        }).catch((er)=>{
        
    });
    await axios.post('https://myshop-12.herokuapp.com/getItemsforSearchPage',{"shopname":"Menwear","limit":6}).then((res)=>{
            
        this.setState({dataListforMen:res.data})
        // this.setState({pageload:false})
        }).catch((er)=>{
        
    });
    await axios.post('https://myshop-12.herokuapp.com/getItemsforSearchPage',{"shopname":"Womenwear","limit":6}).then((res)=>{
            
        this.setState({dataListforWomen:res.data})
        this.setState({pageload:false})
        }).catch((er)=>{
        
    });
 }
   render() {
       if (!this.state.pageload){
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

        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={ban4}
            alt="Second slide"
            height="400px"
            />
        
        </Carousel.Item>
</Carousel>
        </div>
    </section>

    <section className="mx-2" >
        <div>
            <div className="row gx-0 mx-0 my-2 p-2" >
                <div className="col-md-6 ">
                    <h4>Best Mobiles Of the Week</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                <NavLink to={{pathname:"/Search/explore/",state:{"category":"Mobiles"}}} className='text-white text-decoration-none'>
                    <button className="btn btn-primary text-white mx-4 px-4 "> 
                    
                        View All
                        </button></NavLink>
                        
                </div>
            </div>
           
        </div>
        <hr />
        <article>
            <div className="row gx-0 m-0">
            {this.state.dataListforMobiles.map((key,index)=>{
                                       return(
                                        
                                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 p-2">
                                        <div className="card border-0 searchhome">
                                        <NavLink to={{pathname:'explore/buy?id='+key._id}} id={key._id} className="text-decoration-none">
                                        {key.Pic != null ?
                                        <img src={key.Pic} alt="img" class="card-img-top"  style={{'borderRadius':'10px','height':'170px'}}  /> :<Spinner animation="grow" variant="warning" /> }
                                            <div className="card-body">
                                                <p className="card-title text-center m-0" style={{'fontSize':'18px'}}><b>{key.Name}</b></p>
                                                <p className=" m-0 p-0 text-center">{key.Brand}</p>
                                                <p className="m-0 p-0 text-center">Rs {key.Cost}</p>
                                                <p className="m-0 p-0 text-center" ><span style={{'color':'grey'}}>Myshop.com</span> </p>
                                            </div>
                                           </NavLink>
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
                    <h4>Best Men's Wear</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                <NavLink to={{pathname:"/Search/explore/",state:{"category":"Menwear"}}} className='text-white text-decoration-none'>
                    <button className="btn btn-primary mx-4 px-4 ">
                   View All
                   </button>
                   </NavLink>
                        
                   
                </div>
            </div>
           
        </div>
        <hr />
        <article>
            <div className="row gx-0 m-0">
            {this.state.dataListforMen.map((key,index)=>{
                                       return(
                                       
                                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 p-2" >
                                        <div className="card border-0 searchhome">
                                        <NavLink to={{pathname:'explore/buy?id='+key._id}} id={key._id} className="text-decoration-none">
                                       
                                        
        
                                        <img src={key.Pic}  class="card-img-top" alt="img"  style={{'borderRadius':'10px','height':'170px'}} />
                                        <div className="card-body">
                                                <p className="card-title text-center m-0" style={{'fontSize':'18px'}}><b>{key.Name}</b></p>
                                                <p className=" m-0 p-0 text-center">{key.Brand}</p>
                                                <p className="m-0 p-0 text-center">Rs {key.Cost}</p>
                                                <p className="m-0 p-0 text-center" ><span style={{'color':'grey'}}>Myshop.com</span> </p>
                                            </div>
                                            </NavLink>
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
                    <h4>Best Selling Women's Wear</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                <NavLink to={{pathname:"/Search/explore/",state:{"category":"Womenwear"}}} className='text-white text-decoration-none'>
                    <button className="btn btn-primary mx-4 px-4 ">
                    View All
                    </button>
                    </NavLink>
                        
                   
                </div>
            </div>
           
        </div>
        <hr />
        <article>
            <div className="row gx-0 m-0">
            {this.state.dataListforWomen.map((key,index)=>{
                                       return(
                                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 p-2">
                                        <div className="card border-0 searchhome">
                                        <NavLink to={{pathname:'explore/buy?id='+key._id}} id={key._id} className="text-decoration-none">
                                        <img src={key.Pic} alt="img" class="card-img-top"  style={{'borderRadius':'10px','height':'170px'}}  />
                                        <div className="card-body">
                                                <p className="card-title text-center m-0" style={{'fontSize':'18px'}}><b>{key.Name}</b></p>
                                                <p className=" m-0 p-0 text-center">{key.Brand}</p>
                                                <p className="m-0 p-0 text-center">Rs {key.Cost}</p>
                                                <p className="m-0 p-0 text-center" ><span style={{'color':'grey'}}>Myshop.com</span> </p>
                                            </div>
                                           </NavLink>
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
                    <h4>Electronics</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                <NavLink to={{pathname:"/Search/explore/",state:{"category":"Electronics"}}} className='text-white text-decoration-none'>
                    <button className="btn btn-primary mx-4 px-4 ">
                    View All
                    </button>
                    </NavLink>
                        
                   
                </div>
            </div>
           
        </div>
        <hr />
        <article>
            <div className="row gx-0 m-0">
            {this.state.dataListforElectronics.map((key,index)=>{
                                       return(
                                        <div className="col-md-3 col-sm-4 col-6 col-lg-2 p-2">
                                        <div className="card border-0 searchhome">
                                        <NavLink to={{pathname:'explore/buy?id='+key._id}} id={key._id} className="text-decoration-none">
                                        <img src={key.Pic} alt="img" class="card-img-top"  style={{'borderRadius':'10px','height':'170px'}}  />
                                        <div className="card-body">
                                                <p className="card-title text-center m-0" style={{'fontSize':'18px'}}><b>{key.Name}</b></p>
                                                <p className=" m-0 p-0 text-center">{key.Brand}</p>
                                                <p className="m-0 p-0 text-center">Rs {key.Cost}</p>
                                                <p className="m-0 p-0 text-center" ><span style={{'color':'grey'}}>Myshop.com</span> </p>
                                            </div>
                                           </NavLink>
                                        </div>
                                    </div>
                                       )})}
               
                
                
            </div>

        </article>
    </section>
    

</>
        )
    }
    else{
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
              <Spinner animation="border" variant="danger" />
            </div>
             )
    }
    }
}
