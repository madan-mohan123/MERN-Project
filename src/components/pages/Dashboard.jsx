import Profile from '../Profile';
import Additem from '../Additem';
import Myitem from '../MyItem';
import Mystatic from '../Mystatic';
import { NavLink } from 'react-router-dom'
import logo1 from '../../images/images.png';
import { Route} from 'react-router-dom';
import React,{useEffect, useState} from 'react'
import '../css/dashboard.css';
import {Dropdown} from 'react-bootstrap';

var i=0;
export default function Dashboard(props) {
   const [email, setemail] = useState('')
   const [shopName, setshopName] = useState('')
    const [nameondashboard, setNameondashboard] = useState('Dashboard')
   
        useEffect(()=>{
            if(i==0){
                try{
            setemail(props.location.state.email)
            setshopName(props.location.state.shopName)
                }
                catch(e){
                    alert("Some Error Occured ! ")
                }
            i++;
            }
           
        }
        )
    return (
       <>
<div class="container-fluid m-0 p-0">
    <div class="row gx-0 m-0 p-0 dashboard" >
            <div class="col-md-2 col-sm-12 col-12 gx-0 m-0 p-0 d-sm-none d-lg-block d-none" >
               <div class="left-side" >
                   <div class="d-flex justify-content-center p-4" style={{borderBottom: '2px solid grey'}}>
                       <img src={logo1} alt="" width="30%" height="30%" className="rounded" />
                            <h5  class="p-2 text-white">Myshop.com</h5>
                   </div>
                    <ul>
                    <li><NavLink to="">MyShop</NavLink> </li>
                    <li><NavLink to="/Dashboard/Profile/" id="profile" onClick={()=>{setNameondashboard("MyProfile")}}>Profile</NavLink> </li>
                    
                    <li><NavLink to="/Dashboard/MyStatic/" onClick={()=>{setNameondashboard("Statics")}}>Statics</NavLink></li>
                    <li><NavLink to="/Dashboard/Myitem/" onClick={()=>{setNameondashboard("MyProducts")}}>MyProducts</NavLink></li>
                    <li><NavLink to="/Dashboard/Additem" id="additems" onClick={()=>{setNameondashboard("Additem")}}>Add Items</NavLink></li>
                    </ul>
               </div>
            </div>

            <div class="col-md gx-0  p-0" >
                <div class="right-body" >
                    <div class="top p-0 m-0"  >
                        <div class="row gx-0 m-0 p-0" >
                             <div class="col-md col-sm-4 col-4" >
                               
                                <h2  class="p-2 text-white d-inline-block d-sm-none d-md-block">{nameondashboard}</h2>
                            </div>
                            <div class="col-md col-sm-8 col-8 d-flex align-items-center justify-content-end" >
                                
                                    <Dropdown>
                <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey','backgroundColor':'white'}}>
                    Hello {email}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item to="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item to="#/action-2">Logout</Dropdown.Item>
                    
                </Dropdown.Menu>
                </Dropdown>
  
                            </div>
                        </div>     
                    </div>
                    <div className="right-main-body">
                
    <Route exact path="/Dashboard/Profile" component={Profile} />
    <Route exact path="/Dashboard/Additem" component={() => (<Additem data={email}  />)}/>
    <Route exact path="/Dashboard/Myitem"  component={() => (<Myitem data={email}  />)}/>
    <Route exact path="/Dashboard/"  component={() => (<Myitem data={email}  />)}/>                
    <Route exact path="/Dashboard/Mystatic" component={Mystatic}  />
                    
                     

                     </div>
                    
                </div>
            </div>





    </div>
</div>
       </>
    )
}


