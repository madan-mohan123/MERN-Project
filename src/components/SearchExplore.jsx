
import {Dropdown,Spinner,ProgressBar,Form} from 'react-bootstrap';
import React, { Component } from 'react'
import logoimg from '../images/images.png'

import axios from 'axios'
import {NavLink} from 'react-router-dom';
//context Api
const contextapi=React.createContext();

export default class SearchBar extends Component {
constructor(props)
{
    super(props)
    try{ 
    this.state={
      landingpage:this.props.location.state.category ,
      searchkeyword:'',
      querydata:'',
      searchData:[],
      pageload:true
    
  } 
}
catch(e){
  this.state={
    landingpage:'Mobiles' ,
    searchkeyword:'',
    querydata:'',
    searchData:[],
    pageload:true
  
}
}
   
}
componentDidMount(){
  this.setState({pageload:false})
}
handleclk=(e)=>{
e.preventDefault();

axios.post('https://myshop-12.herokuapp.com/getSearchResult',{"category":this.state.searchkeyword,"productName":this.state.querydata}).then((res)=>{

this.setState({searchData:res.data})
this.setState({pageload:false})
}).catch((gh)=>{

});

}

  render() {
    if (!this.state.pageload){
    return (
      <>
          <nav>
      <div className="row mx-0 px-0 gx-0 " style={{backgroundColor:'rgb(38, 61, 87)'}}>
          <div className="col-md-11 mx-auto  p-2">
              <div className="row gx-0">
                  <div className="col-md-3 d-flex flex-row my-2">
                  <NavLink style={{fontFamily:"Zen Dots, cursive",fontSize:'25px'}} className="text-white mx-2 text-decoration-none" to="/Contact">
                        <img src={logoimg} className="img-fluid rounded-circle px-2 d-sm-none d-md-inline-block d-none" alt="" style={{ height:"40px"}}/>
                        MyShop.<span style={{color:'blue'}}>com</span> </NavLink>
                  </div>
                  <div className="col-md-5 col-sm-11 col-11">
                  <div class="input-group m-2">
                 
          <span class="input-group-text bg-grey m-0 p-0 border-none d-sm-none d-md-none d-lg-block d-none">
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
     
      <input className="form-control " placeholder="Search here ..." 
      onChange={(e)=>{this.setState({querydata:e.target.value})}}
      type="text"
      />
     
      <button onClick={this.handleclk} className="bg-white m-0 btn " style={{"borderRadius":'0 10px 10px 0'}}>Go</button>
 
  </div>
                      
                      
                  </div>
                  <div className="col-md-4 col-sm-12">
              <NavLink to='/buyerdash' className="text-white text-decoration-none">
                <button className="btn  m-2 px-4 bg-warning text-white" ><i class="fa fa-sign-in" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>
       Login
       </button>
        </NavLink>
        <NavLink to='/buyerdash' className="text-white text-decoration-none">
                      <button className="btn btn-secondary m-2 px-4"><i class="fa fa-cart-arrow-down" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>Cart</button>
                      </NavLink>
                  </div>
                 
              </div>
          </div>
      </div>
      
  </nav>

<contextapi.Provider value= {this.state}>

<SearchExplore></SearchExplore>
</contextapi.Provider>

      </>
  )
                                }
                                else{
                                  return (
                                    <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                                      <Spinner animation="border" variant="warning" />
                                    </div>
                                     )
                                }
}
}



class SearchExplore extends Component {

static contextType=contextapi;

constructor(props)
{
    super(props);
    this.state={
        landingData:[],
        pageload:true
    }
} 

componentDidMount(){

    if(this.context.querydata === ""){
    axios.post('https://myshop-12.herokuapp.com/getItemsforSearchPage',{"shopname":this.context.landingpage,"limit":30}).then((res)=>{   
    this.setState({landingData:res.data})
    this.setState({pageload:false})
    }).catch((gh)=>{
    
});
    }
   
   
}

render() {
  if (!this.state.pageload){
        return (
            <>
<section className="m-2" >
        <div className="row gx-0 p-2 m-0 d-sm-none d-md-block d-none">
           <div className="col-md-10 mx-auto">
               <div className="row gx-0 m-0 ">
                <div className="col-md-3 col-sm-4 col-lg-2 m-2">
                <Dropdown >
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
                </Dropdown  >
                </div>
                <div className="col-md-3 col-sm-4 col-lg-2 m-2">
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
                 <div className="col-md-3 col-sm-4 col-lg-2 m-2">
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
                 <div className="col-md-3 col-sm-4 col-lg-2 m-2">
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
                 
                 <div className="col-md-3 col-sm-4 col-lg-2 m-2">
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
    <div className="row gx-0 m-0 p-0 m-0" >
        <div className="col-md-2 my-2 px-0" >
           <SearchFilter />
        </div>

        <div className="col-md-10 px-0 my-2 " >
            <section className="left-side-bar p-2 " >
            <p>Home <b>&gt;</b> {this.context.querydata === "" ? this.context.landingpage:this.context.searchkeyword}  
            </p>
            <p style={{color:'blue'}}> {this.context.querydata === "" ? this.context.landingpage : this.context.querydata} <b>(Showing result {this.state.landingData.length} from 100)</b>
  </p>
            <hr />
            <article>
                <div className="row gx-0 px-2 m-0" >
                {
                this.context.querydata === "" ? this.state.landingData.map((key,index)=>{
                                       return(
              <div className="col-md-3 col-sm-4 col-6 col-lg-2 p-2" >
                        <div className="card p-2 searchexplore border-0" style={{'boxShadow':'0 0 3px 3px grey'}}>
                        <img src={key.Pic} alt="img" class="card-img-top"  style={{'borderRadius':'10px','height':'170px'}}  />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >{key.Name}</p>
                               <div style={{'height':'20px','overflow':'hidden'}}>

                               
                                <p className="m-0 p-0 "><b>Rs {key.Cost}</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px','margin-left':'10px'}}>Rs {key.cost}</span> <span style={{"color": 'green','font-size':'13px'}}><b>{key.Discount}% off</b></span></p>
                                </div>
                                <p className="m-0 p-0 " style={{"color": 'grey','fontSize':'15px'}}>My.shopcom</p>
                            </div>
                            <NavLink to={{pathname:'buy?id='+key._id}} id={key._id} className="d-block btn btn-primary">
                          Buy
                            </NavLink>
                           
                        </div>
                    </div>

                                       )}) : 
                                       this.context.searchData.map((key,index)=>{
                                        return(
                         <div className="col-md-3 col-sm-4 col-6 col-lg-2 p-2">
                        <div className="card p-2 searchexplore border-0" style={{'boxShadow':'0 0 3px blue'}}>
                        <img src={key.Pic} alt="img" class="card-img-top"  style={{'borderRadius':'10px','height':'170px'}}  />
                         <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >{key.Name}</p>
                                <div style={{'height':'20px','overflow':'hidden'}}>
                         
<p className="m-0 p-0 "><b>Rs {key.Cost}</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px','margin-left':'10px'}}>Rs {key.cost}</span> <span style={{"color": 'green','font-size':'13px'}}><b>{key.Discount}% off</b></span></p>
</div>
                                <p className="m-0 p-0 " style={{"color": 'grey','fontSize':'15px'}}>My.shopcom</p>
                            
                            </div>
                            <NavLink to={{pathname:'buy?id='+key._id}} id={key._id} className="d-block btn btn-warning">
                          Buy
                            </NavLink>
                            
                         </div>
                     </div>
 
                                        )})
                                       
                                       }
                   
                   
                    
                   
                   
                </div>
                
                
                
               
            </article>
            </section>
        </div>
    </div>
    </div>


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


class SearchFilter extends Component {
  render() {
    return (
      <>
        <section className="left-side-bar p-2 d-sm-none d-md-block d-none" style={{"height": "100vh"}} >
                <h5><b>Filters</b> </h5>
                <hr />
                <h6><b>Brands</b></h6>
                <hr/>
               <form >
                <div className="form-group form-control">
                    <input type="checkbox"  name="" id="" /> Puma
                    
                </div>
                <div className="form-group form-control">
                 <input type="checkbox" name="" id="" /> Addidas
                 
             </div>
             <div className="form-group form-control">
                 <input type="checkbox" name="" id="" /> Nike
                 
             </div>
             <div className="form-group form-control">
                 <input type="checkbox" name="" id="" /> Reebok
                 
             </div>
               </form>
               <hr />
               <h6><b>Price</b></h6>
               <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Control type="range" />
            </Form.Group>
          </Form>
               <ProgressBar now={80} variant='success' className="my-2" animated label={5000} />
               <form>
                   <div className="form-group  m-0 p-0" >
                     <input type="text" name="" id="" className="form-control" placeholder="Enter price" style={{"width": "100%"}} />
                   </div>
                  
                  
               </form>


            </section> 
      </>
    )
  }
}

