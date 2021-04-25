import axios from 'axios'
import React,{ Component} from 'react'
import {Modal,Button, Container, Form} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'



function setTokenforbuyer(userToken){
    sessionStorage.setItem('emailtokenforbuyer',userToken)
    }

function getTokenforCredentials(){
    try{
        const emailtoken = sessionStorage.getItem('emailtokenforbuyer');
        return(emailtoken)  
    }
    catch{
        return(null) 
    }
    
  
}

export default class BuyItem extends Component {
  constructor(props){
      super(props)
      this.state={
          id:'',
          productDetails:{},
          page:'',
         auth:false,
         showsignup:false,
         showsignin:false,
         address:false,
         username:'',
         email:"",
         password:"",
         repassword:"",
         country:'',
         mystate:'',
         phoneno:'',
         myaddress:'',
         confirametion:false,
         completebuy:false,
         review:false,
         reviewmessage:''
      }
      
  }  
 handleClose = () => this.setState({showsignup:false});
 handleShow = () => this.setState({showsignup:true});;

 Signin=()=>{


    const signindata={
        "username":this.state.username,
        "email":this.state.email,
        "password":this.state.password,
        'check':'buyer'
    };
  
    if(this.state.email !==""&& this.state.password!== ""){     
         axios.post('http://localhost:5000/get_auth',signindata).then((res)=>{ 
            if(res.data.Auth){
                alert("successfully Login");
                const emailTokenforbuyer=
                    this.state.email;    
                setTokenforbuyer(emailTokenforbuyer)
                this.setState({showsignin:false})   
        }

            else{
                alert("Wrong Email Id Or Password");      
            }           
             }).catch((error)=>{
                 alert("OOPs! Something Wrong")   
             }); 
        }
    
    else{
        alert("Field cannot be empty")
    }
   
  }

 Signup=()=>{
   const signupdata={
       "username":this.state.username,
       "email":this.state.email,
       "password":this.state.password
   };
  
   if(this.state.username!=="" && this.state.email !==""&& this.state.password!== ""){
       if(this.state.password === this.state.repassword){
        axios.post('http://localhost:5000/save_auth',signupdata).then((res)=>{ 
            if(res.data === false){
                alert("Account Exist, Try another Account");
            }
            else if(res.data === true){
                alert("Account successfully created ? ")
                this.setState({showsignup:false})
            }
                            
            }).catch((error)=>{
                alert("OOPs! Something Wrong")   
            }); 
       }
       else{
        alert("Password Mismatch")  
       }
   }
   else{
       alert("Field cannot be empty")
   }
  
 }
    addtocart(email){

        axios.post('http://localhost:5000/add_to_cart',{"id":this.state.id,"email":email}).then((res)=>{ 
            if(res.data===false){
                alert("Error") 
            }
            else{
                alert(res.data) 
            }  
        }).catch((gh)=>{   
    }); 
       
    }
    checkCredentials(data){   
    const email=getTokenforCredentials();
    if(email!=null){
        if(data==="addtocart"){
        this.addtocart(email)
        }
        else if(data==="buy"){
        this.setState({address:true})
        }
        return true;
    }
    else{
       
        return false;
    }
    }
    myaddress=()=>{
        const data={
            "country":this.state.country,
            "phoneno":this.state.phoneno,
            "state":this.state.mystate,
            "address":this.state.address
        }
        this.setState({address:false})

        axios.post('http://localhost:5000/single_buy',{"email" : getTokenforCredentials(),"address":data,"id":this.state.id}).then((res)=>{ 
            if(res.data===true){
                alert("Thanks for Buying")
            }
            else{
                alert("Error") 
            }  
        }).catch((gh)=>{   
    });     
    }

     async componentDidMount(){
        const ob=new URLSearchParams(window.location.search)
         const id=ob.get('id');
        // alert(id)
         this.setState({id:id}) 
         await axios.post('http://localhost:5000/get_item_by_id',{"id":id}).then( (res)=>{
             

         this.setState({productDetails:res.data})
         this.setState({page:res.data.Category})


         
        }).catch((gh)=>{   
    });   
    }

    logOut(){
       sessionStorage.removeItem('emailtokenforbuyer')
      
    }




    render() {
      return (
            <>
        
          <div className="buyitem">
        <section className="m-2" style={{'backgroundColor':'navy'}}>
        <div className="row gx-0 p-2 m-0">
           <div className="col-md-8 ">
               <h2 className="text-center text-white">
            
{
   getTokenforCredentials() != null ? "Hello " + getTokenforCredentials() : "Login to buy Products ?"
  
}
</h2>
           </div>
           {
   getTokenforCredentials() != null ?  
   
   
   <div className="col-md-4 d-flex justify-content-end">
<NavLink to={{pathname:"/buyerdash"}} className="text-decoration-none text-dark mx-2" onClick={this.logOut}>                     
   <button className="btn btn-secondary px-4">DashBoard</button>
   </NavLink> 
   <NavLink to={{pathname:"/search"}} className="text-decoration-none text-dark" onClick={this.logOut}>                     
   <button className="btn btn-warning px-4">Logout</button>
   </NavLink> 
       </div>
       : ''
  
}
          
           
        </div>
    </section>

    <section className="m-2">
        <div className="row g-0 m-2">
            <div className="col-md-4">
                    <div className="row g-0">
                        <div className="col-md-3 col-sm-6 d-sm-none d-md-block d-none">
                           <div className="row overflow-auto" style={{"height":"300px"}}>
                           <div className="col-md-12 py-2">
                           {this.state.productDetails["Pic"]!=null ? 
                                <MyImageItem pic={this.state.productDetails["Pic"]} />
                                : ''
                            }
                           
                           </div>
                           <div className="col-md-12 py-2">
                           {this.state.productDetails["Pic"]!=null ? 
                                <MyImageItem pic={this.state.productDetails["Pic"]} />
                                : ''
                            }
                           </div>
                           <div className="col-md-12 py-2">
                           {this.state.productDetails["Pic"]!=null ? 
                                <MyImageItem pic={this.state.productDetails["Pic"]} />
                                : ''
                            }
                           </div>
                           <div className="col-md-12 py-2">
                           {this.state.productDetails["Pic"]!=null ? 
                                <MyImageItem pic={this.state.productDetails["Pic"]} />
                                : ''
                            }
                           </div>
                           </div>
                        </div>
                        <div className="col-md-9 col-sm-6 p-2 d-flex align-items-center">
                        {this.state.productDetails["Pic"]!=null ? 
                                <MyImageItem pic={this.state.productDetails["Pic"]} />
                                : ''
                            }
                            {/* <img src="../images/banner.jpg" width="100%" alt="" /> */}
                        </div>
                    </div>
                    <div className="row g-0 m-0">
                        <div className="col-md-6 p-2">
                            <button className="btn btn-primary w-100" onClick={async ()=>{
                               const check= this.checkCredentials("addtocart");
                               if(!check){
                                //    this.props.history.push({
                                //        pathname:'/Register/signin',
                                //        search:'?q=buyer',
                                //    })
                               
                              
                              this.setState({showsignup:true})
                               }
                            }}>Add To cart</button>
                          
                        </div>
                        <div className="col-md-6 p-2">
                            <button className="btn btn-warning w-100" onClick={()=>{
                               const check= this.checkCredentials("buy");
                               if(!check){
                                this.setState({showsignup:true})
                               }

                            }}>Buy Now</button>
                           
                        </div>
                       
                    </div>
            </div>
            <div className="col-md-8 px-4 py-2 g-0">
                <p style={{'opacity': '0.7'}}>Home &gt; {this.state.page}</p>
                <p style={{'opacity': '0.7'}} className="my-0"><b classNameName='text-warning'> Brand #</b>{this.state.productDetails["Brand"]}</p>
                <p className="my-2"><span style={{'color':'blue','font-size':'20px'}}>Description</span></p>
        
                <h5>{this.state.productDetails["Description"]}</h5>
                <p className="m-0 p-0 h4" ><b>Rs {this.state.productDetails["Cost"]}</b> <span style={{"text-decoration": 'line-through', 'opacity':'0.7','font-size':"17px"}}>Rs 9000</span> <span style={{'color': 'green','font-size':'17px'}}><b>{this.state.productDetails["Discount"]}% off</b></span></p>
                <p style={{'opacity': '0.7'}}>446 rating and 56 reviews</p>
                <p className="h5" style={{'opacity': '0.7'}}><b>Seller</b> <span className="h6" style={{"color":"blue"}}>@{this.state.productDetails["Shopname"]}</span></p>
                <hr />
                <h4>Produc Details</h4>
                <hr />
                <div className="row gx-0 m-0">
                    <div className="col-md">
                        <h4>Ratings and Reviws </h4>
                    </div>
                    <div className="col-md">
                        <p style={{"opacity": "0.7"}}>446 rating and 56 reviews</p>
                    </div>
                    <div className="col-md d-flex justify-content-end">
                        <button className="btn btn-primary px-4" onClick={()=>{
                            this.setState({review:true})
                        }}>Rate Product</button>
                    </div>
                </div>
               
                    <div>
                    <div className="col-md-12 mx-auto">
                        <p className="my-0"><b>#Madan Mohan</b></p>
                        <p className="my-2">Greate Website Easy to buy Products</p>
                    </div>
                    <hr/><div className="col-md-12 mx-auto">
                        <p className="my-0"><b>#Udit</b></p>
                        <p className="my-2">Fine</p>
                    </div>
                </div>

            </div>
       
        </div>
    </section>

{/* //Signup ==================== */}
    <Modal show={this.state.showsignup} onHide={this.handleClose}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    >
        <Modal.Header closeButton style={{'backgroundColor':'navy','color':'white'}}>
          <Modal.Title>MyShop.com</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Container>
        <Form >
    <Form.Group controlId="formGroupPassword">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" onChange={(e)=>{
        this.setState({username:e.target.value})
        
    }} />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    
    onChange={(e)=>{
        this.setState({email:e.target.value}
        )
    }}

    />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    onChange={(e)=>{
        this.setState({password:e.target.value}
        )
    }}
    />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Re-Password</Form.Label>
    <Form.Control type="password" placeholder="Re-Password" 
    onChange={(e)=>{
        this.setState({repassword:e.target.value}
        )
    }}
    
    />
  </Form.Group>

</Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="warning" onClick={

            ()=>{
                this.setState({showsignup:false,showsignin:true})
            }
        }>
            Sign In
          </Button>
          <Button variant="primary" onClick={this.Signup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>

{/* signin=============== */}

      <Modal show={this.state.showsignin} onHide={()=>{this.setState({showsignin:false})}}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    >
        <Modal.Header closeButton style={{'backgroundColor':'rgb(38, 61, 87)','color':'white'}}>
          <Modal.Title><span className="mx-4">Sign In Here</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Container>
        <Form >
    

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    
    onChange={(e)=>{
        this.setState({email:e.target.value}
        )
    }}

    />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    onChange={(e)=>{
        this.setState({password:e.target.value}
        )
    }}
    />
    
  </Form.Group>
</Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={this.Signin}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>

{/* Adress============ */}

<Modal show={this.state.address} onHide={()=>{this.setState({address:false})}}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    
    >
        <Modal.Header closeButton>
          <Modal.Title>Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Form >
    

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Enter country"
    
    onChange={(e)=>{
        this.setState({country:e.target.value}
        )
    }}

    />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="State" 
    onChange={(e)=>{
        this.setState({mystate:e.target.value}
        )
    }}
    />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="H.N | Street" 
    onChange={(e)=>{
        this.setState({myaddress:e.target.value}
        )
    }}
    />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Phono No</Form.Label>
    <Form.Control type="text" placeholder="Phone NO" 
    onChange={(e)=>{
        this.setState({phoneno:e.target.value}
        )
    }}
    />
  </Form.Group>
</Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={this.myaddress}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


      {/* confirm=========== */}
      <Modal show={this.state.confirametion} onHide={()=>{this.setState({confirametion:false})}}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    
    >
        <Modal.Header closeButton>
          <Modal.Title style={{'color':'blue'}}>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Do you want to buy</h4>
       </Modal.Body>
       <Modal.Footer>
       <Button variant="primary" onClick={()=>{
           this.setState({confirametion:false})
       }}>
            cancel
          </Button>
          <Button variant="primary" onClick={()=>{
              this.setState({completebuy:true})
          }}>
            yes
          </Button>
       </Modal.Footer>
       </Modal>


       {/* review ============ */}
        
       <Modal show={this.state.review} onHide={()=>{this.setState({review:false})}}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered 
    >
        <Modal.Header closeButton>
          <Modal.Title style={{'color':'blue'}}>Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="formGroupPassword">
    <Form.Label>Rate Us</Form.Label>
    <Form.Control type="text" placeholder="Type your Feedback" 
    onChange={(e)=>{
        this.setState({reviewmessage:e.target.value}
        )
    }}
    /> 
     </Form.Group>
     
       </Modal.Body>
       <Modal.Footer>
          <Button variant="primary" onClick={()=>{
              this.setState({review:false})
          }}>
            Done
          </Button>
       </Modal.Footer>
       </Modal>



    
             </div>
        
                        
            </>
        )
                        }
    
}





class MyImageItem extends Component {
    constructor(props){
        super(props)
        this.state={
            picurl:this.props.pic
        }
    }

   async componentDidMount(){
        console.log(this.state.picurl)
        if(this.state.picurl != null ){
         await axios.post('http://localhost:5000/getImage',{"imagename":this.state.picurl}).then((res)=>{  
        
                           this.setState({picurl:res.data})
                      }).catch((er)=>{
                          console.log("fdsfs")
                      })
        
    }
}
    
   render() {
       return (
           <>
           
<img src={this.state.picurl} alt="img" className="w-100" />

           </>
       )
   }
}

