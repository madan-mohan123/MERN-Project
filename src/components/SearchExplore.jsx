import item from '../images/lh6.jpg';
import {Dropdown} from 'react-bootstrap';
import React, { Component } from 'react'

import logoimg from '../images/shopify.png'
import axios from 'axios'
import {NavLink, Redirect} from 'react-router-dom';
//context Api
const contextapi=React.createContext();

export default class SearchBar extends Component {
constructor(props)
{
    super(props)
    this.state={
      landingpage:this.props.location.state.category,
      searchkeyword:'',
      querydata:'',
      searchData:[],
    
  } 
   
}
handleclk=(e)=>{
e.preventDefault();

axios.post('http://localhost:5000/getSearchResult',{"category":this.state.searchkeyword,"productName":this.state.querydata}).then((res)=>{
  console.log(res.data)

this.setState({searchData:res.data})
}).catch((gh)=>{

});

}

  render() {
    return (
      <>
          <nav>
      <div className="row mx-0 px-0 gx-0 " style={{"backgroundImage": "linear-gradient(red,white)"}}>
          <div className="col-md-10 mx-auto  p-2">
              <div className="row gx-0">
                  <div className="col-md-2 d-flex flex-row">
                      <img src={logoimg} style={{'borderRadius':'2px'}} height="40px" alt="" />
                      <h6 className="p-2">MyShop.com</h6>
                  </div>
                  <div className="col-md-6">
                  <div class="input-group">
                 
          <span class="input-group-text bg-grey m-0 p-0 border-none">
          <select name="" onChange={(e)=>{this.setState({searchkeyword:e.target.value})}
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
     
      <input class="form-control " placeholder="Search here ..." 
      onChange={(e)=>{this.setState({querydata:e.target.value})}}
      />
      <button onClick={this.handleclk} className="bg-white m-0 btn " style={{"borderRadius":'0 10px 10px 0'}}>Go</button>
 
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

<contextapi.Provider value= {this.state}>

<SearchExplore ></SearchExplore>
</contextapi.Provider>

      </>
  )
}
}


class MyImageItem extends Component {
  constructor(props){
      super(props)
      this.state={
          pic:this.props.pic
      }
  }

  componentDidMount(){
       axios.post('http://localhost:5000/getImage',{"imagename":this.state.pic}).then((res)=>{  
         
                         this.setState({pic:res.data})
                    })
      
  }
  
 render() {
     return (
         <>
<img src={this.state.pic} class="card-img-top img-fluid"  style={{'borderRadius':'10px','height':'180px'}}  />

         </>
     )
 }
}

function GotoBuyDash(id){
  alert(id);
 return <Redirect to={{pathname:"/"}} />
  }

class SearchExplore extends Component {

static contextType=contextapi;

constructor(props)
{
    super(props);
    this.state={
        landingData:[]
    }
} 

componentDidMount(){
console.log(this.context.querydata)
    if(this.context.querydata == ""){
    axios.post('http://localhost:5000/getItemsforSearchPage',{"shopname":this.context.landingpage,"limit":10}).then((res)=>{   
    this.setState({landingData:res.data})
    }).catch((gh)=>{
    
});
    }
    else{

    }
   
}





render() {
        return (
            <>
<section className="m-2" >
        <div className="row gx-0 p-2">
           <div className="col-md-9 mx-auto">
               <div className="row gx-0 ">
                <div className="col">
                <Dropdown>
                <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey'}}>
                    Men's Wear
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item to="#/action-1">T-shirt</Dropdown.Item>
                    <Dropdown.Item to="#/action-2">Shoes</Dropdown.Item>
                    <Dropdown.Item to="#/action-3">Shirt</Dropdown.Item>
                    <Dropdown.Item to="#/action-1">Half</Dropdown.Item>
                    <Dropdown.Item to="#/action-2">Undergarments</Dropdown.Item>
                    <Dropdown.Item to="#/action-3">Jeans</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="col">
                <Dropdown>
  <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey'}}>
    Women's wear
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item to="#/action-1">Top</Dropdown.Item>
    <Dropdown.Item to="#/action-2">Shoes</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Lehanga</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Gauns</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Wedding Cloths</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                 </div>
                 <div className="col">
                 <Dropdown>
  <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey'}}>
    Mobiles
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item to="#/action-1">MI Phones</Dropdown.Item>
    <Dropdown.Item to="#/action-2">Samsung</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Techno</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Apple</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Nokia</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                 </div>
                 <div className="col">
                 <Dropdown>
  <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey'}}>
    Electronics
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item to="#/action-1">Ac</Dropdown.Item>
    <Dropdown.Item to="#/action-2">LED</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Refigraters</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Cooler</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Heaters</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                 </div>
                 <div className="col">
                 <Dropdown>
  <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey'}}>
    Sports
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item to="#/action-1">Cricket</Dropdown.Item>
    <Dropdown.Item to="#/action-2">Tennis</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Football</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Polo</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Basket ball</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                 </div>
                 <div className="col">
                 <Dropdown>
  <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey'}}>
    Toys
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item to="#/action-1">Top</Dropdown.Item>
    <Dropdown.Item to="#/action-2">Shoes</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Lehanga</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Gauns</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Wedding Cloths</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                 </div>
               </div>

           </div>
        </div>
    </section>


    <div className="m-2">
    <div className="row gx-0 m-0 p-0" >
        <div className="col-md-2 my-2 px-0" >
           <SearchFilter />
        </div>

        <div className="col-md-10 px-0 my-2 " >
            <section className="left-side-bar p-2" >
            <p>Home <b>&gt;</b> {this.context.querydata == "" ? this.context.landingpage:this.context.searchkeyword}  
            </p>
            <p> {this.context.querydata == "" ? this.context.landingpage : this.context.querydata} <b>(Showing result 1-20 from 100)</b>
  </p>
            <hr />
            <article>
                <div className="row gx-0 px-2" >
                {
                this.context.querydata == "" ? this.state.landingData.map((key,index)=>{
                                       return(
              <div className="col-md-2 p-2" >
                        <div className="card p-2 searchexplore border-0" style={{'boxShadow':'0 0 3px 3px grey'}}>
                        <MyImageItem pic={key.Pic}/>
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >{key.Name}</p>
                                <p className=" m-0 p-0 ">{key.Description}</p>
                                <p className="m-0 p-0 "><b>Rs {key.Cost}</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs {key.cost}</span> <span style={{"color": 'green','font-size':'13px'}}><b>{key.Discount}% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>{key.Shopname}</p>
                            </div>
                            <NavLink to={{pathname:'buy/?id='+key._id}} id={key._id} className="d-block btn btn-primary">
                          Buy
                            </NavLink>
                           
                        </div>
                    </div>

                                       )}) : 
                                       this.context.searchData.map((key,index)=>{
                                        return(
                         <div className="col-md-2 p-2">
                         <div className="card border-0">
                         <MyImageItem pic={key.Pic}/>
                             <div className="my-2">
                                 <p className=" my-0" style={{"opacity": "0.8"}} >{key.Name}</p>
                                 <p className=" m-0 p-0 ">{key.Description}</p>
                                 <p className="m-0 p-0 "><b>Rs {key.Cost}</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs {key.cost}</span> <span style={{"color": 'green','font-size':'13px'}}><b>{key.Discount}% off</b></span></p>
                                 <p style={{"color": 'green','fontSize':'13px'}}>{key.Shopname}</p>
                        </div>
                            
                         </div>
                     </div>
 
                                        )})
                                       
                                       }
                   
                   
                    
                   
                    
                    
                    {/* <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                           </div>
                           
                        </div>
                    </div> */}
                </div>
                
                
                
               
            </article>
            </section>
        </div>
    </div>
    </div>


</>
        )
    }
}


class SearchFilter extends Component {
  render() {
    return (
      <>
        <section className="left-side-bar p-2" style={{"height": "100vh"}} >
                <h5>Filter </h5>
                <hr />
              
                <h6>Brands</h6>
                <hr/>
               <form >
                <div className="form-group">
                    <input type="checkbox" name="" id="" /> Puma
                    
                </div>
                <div className="form-group">
                 <input type="checkbox" name="" id="" /> Addidas
                 
             </div>
             <div className="form-group">
                 <input type="checkbox" name="" id="" /> Nike
                 
             </div>
             <div className="form-group">
                 <input type="checkbox" name="" id="" /> Reebok
                 
             </div>
               </form>
               <hr />
               <h6>Price</h6>
               <div className="progress progress-bar-striped bg-warning my-2">
               </div>
               <form>
                   <div className="form-group d-inline " >
                     <input type="text" name="" id="" placeholder="Min" style={{"width": "80px"}} />
                   </div>
                   to
                   <div className="form-group d-inline">
                   <select name="" id="">
                       <option value="100">RS 100</option>
                       <option value="100">Rs 500</option>
                       <option value="100">Rs 1000</option>
                       <option value="100">Rs 1500</option>
                   </select>
                  </div>
               </form>


            </section> 
      </>
    )
  }
}

