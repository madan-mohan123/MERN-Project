import axios from 'axios'
import React, { Component } from 'react'
import Searchnav from './Searchnav'
import {NavLink, Redirect} from 'react-router-dom';
import Popup from 'reactjs-popup';
import BuySignin from './BuySignin'
import  Myaddresses from "./Myaddresses";


function getTokenShop(){
    try{
        const tokenString = sessionStorage.getItem('token');
        const tokenData=JSON.parse(tokenString).emailToken
        return(tokenData)  
    }
    catch{
        return('') 
    }
    
  
}

export default class BuyItem extends Component {

  constructor(props){
      super()
      this.state={
          addtocart:false,
          buy:false,
          current:true,
          id:''
      }
  }
    buy=()=>{
        if(getTokenShop()!=''){
            
            this.setState({current:false});
        axios.post('http://localhost:5000/buy',{"myid":this.state.id}).then((res)=>{   
            }).catch((gh)=>{   
        });
    }
    else{
      
            this.setState({current:true});

    }
}
    addtocart(){
        alert("gd");
       
    }
    componentDidMount(){
        const ob=new URLSearchParams(window.location.search)
         const id=ob.get('id');
         this.setState({id:id})
    
        
    }
    render() {
        return (
            <>
          
            {!this.state.current ? <Myaddresses />:
          <div className="buyitem">
            <Searchnav />
            
            <section class="m-2" >
        <div class="row gx-0 p-2">
           <div class="col-md-9 mx-auto">
               <div class="row gx-0">
                <div class="col">
                   <h6> Men's Wear</h6>
                </div>
                <div class="col">
                    <h6> Foot wear</h6>
                 </div>
                 <div class="col">
                    <h6> Garments</h6>
                 </div>
                 <div class="col">
                    <h6> ladies</h6>
                 </div>
                 <div class="col">
                    <h6> interior</h6>
                 </div>
                 <div class="col">
                    <h6> Toys</h6>
                 </div>
               </div>

           </div>
        </div>
    </section>

    <section class="m-2">
        <div class="row g-0 m-2">
            <div class="col-md-4">
                    <div class="row g-0">
                        <div class="col-md-3">
                           <div class="row overflow-auto" style={{"height":"300px"}}>
                           <div class="col-md-12 py-2">
                            <img src="../images/banner.jpg" width="100%" alt="" />
                           </div>
                           <div class="col-md-12 py-2">
                            <img src="../images/banner.jpg" width="100%" alt="" />
                           </div>
                           <div class="col-md-12 py-2">
                            <img src="../images/banner.jpg" width="100%" alt="" />
                           </div>
                           <div class="col-md-12 py-2">
                            <img src="../images/banner.jpg" width="100%" alt="" />
                           </div>
                           </div>
                        </div>
                        <div class="col-md-9 p-2 d-flex align-items-center">
                            <img src="../images/banner.jpg" width="100%" alt="" />
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-md-6 p-2">
                            <button class="btn btn-primary w-100" onClick={()=>{
                                this.setState({addtocart:true,current:false})
                            }}>Add To cart</button>
                          
                        </div>
                        <div class="col-md-6 p-2">
                            <button class="btn btn-warning w-100" onClick={this.buy}>Buy Now</button>
                           
                        </div>
                       
                    </div>
            </div>
            <div class="col-md-8 px-4 py-2 g-0">
                <p style={{'opacity': '0.7'}}>Home &gt; Wear</p>
                <p style={{'opacity': '0.7'}} class="my-0">Puma</p>
                <h5>Zod Runner v3 for men</h5>
                <p class="m-0 p-0 h4" ><b>Rs 1067</b> <span style={{"text-decoration": 'line-through', 'opacity':'0.7','font-size':"17px"}}>Rs 9000</span> <span style={{'color': 'green','font-size':'17px'}}><b>40% off</b></span></p>
                <p style={{'opacity': '0.7'}}>446 rating and 56 reviews</p>
                <p class="h5" style={{'opacity': '0.7'}}>seller <span class="h6" style={{"color":"blue"}}>Trends</span></p>
                <hr />
                <h4>Produc Details</h4>
                <hr />
                <div class="row g-0">
                    <div class="col-md">
                        <h4>Ratings and Reviws </h4>
                    </div>
                    <div class="col-md">
                        <p style={{"opacity": "0.7"}}>446 rating and 56 reviews</p>
                    </div>
                    <div class="col-md d-flex justify-content-end">
                        <button class="btn btn-primary px-4">Rate Product</button>
                    </div>
                </div>
                {/* <div class="row g-0 my-4"> */}
                    <div class="col-md-12 mx-auto">
                        <p class="my-0" ><b>@Madan Mohan</b></p>
                        <p class="my-0"> Nice Shoes</p>
                        <p class="my-2">rating here</p>
                    </div>
                    {/* </div> */}
                    
                    <hr />
                    <div>
                    <div class="col-md-12 mx-auto">
                        <p class="my-0"><b>@Madan Mohan</b></p>
                        <p class="my-2">Nice Shoes</p>
                    </div>
                    <hr/><div class="col-md-12 mx-auto">
                        <p class="my-0"><b>@Madan Mohan</b></p>
                        <p class="my-2">Nice Shoes</p>
                    </div>
                </div>

            </div>
       
        </div>
    </section>
             </div>
    }    
             
            </>
        )
    }
}


const PopupExample = () => (
    
    <Popup  trigger={<button class="btn btn-primary w-100">Add to Cart </button>}  modal >
     {close => (
        <div className="modald">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Signin </div>
          <div className="content">
           <div class="form-group">
             <label for=""><h6>Email</h6></label>
             <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
            
           </div>
           <div class="form-group">
             <label for=""><h6>PassWord</h6></label>
             <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
            
           </div>
          </div>
          <div className="actions">
          

          </div>
          
        </div>
      )}
    </Popup>
  )