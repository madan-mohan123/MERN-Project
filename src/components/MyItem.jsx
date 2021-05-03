
import axios from 'axios'
import React, { Component } from 'react'
import {OverlayTrigger,Popover} from 'react-bootstrap'
function getTokenEmail(){
    const tokenString = sessionStorage.getItem('token');
    const tokenemail=JSON.parse(tokenString).emailToken
    return(tokenemail)
  
}


function removeArticle(data){
   
    axios.post('https://myshop-12.herokuapp.com/delete_items',{"id":data}).then((res)=>{  
             alert("Successfully Deleted")
             
        }).catch((er)=>{   
});

}
export default class MyItem extends Component {

    constructor(){
        super()
        this.state={
            dataList:[],
            picdata:''
        }
    }
   

    componentDidMount(){
        
        axios.post('https://myshop-12.herokuapp.com/get_items',{"email":getTokenEmail()}).then((res)=>{  
            
             this.setState({dataList:res.data})
        }).catch((er)=>{   
});
        
    }


    render() {
        return (
            <>
            < div class="myitems" >
               <div class="row gx-0 px-2" >
          
                      {

                      this.state.dataList.map((key,index)=>{
                   
                          return(
                       
                       <div class="col-md-4 col-sm-6 col-lg-3  p-2 d-flex justify-content-center">
                       <div class="card mx-2 my-2" style={{width: '18rem'}}>
                           < MyImageItem pic={key.Pic}/>

                           

                               <div class="card-body">
                              
                               <h5 className="card-title text-center">{key.Name}</h5>
                               <p className="my-0"><span ><b>Brand:</b></span> {key.Brand}</p>
                              <p className="my-0"><span style={{color:"green",fontSize:"20px"}}><b>Rs {key.Cost}</b></span></p>
                                 <span>
                               <OverlayTrigger trigger="hover" placement="top" overlay={
                                <Popover id="popover-basic">
                                <Popover.Title as="h3">Details</Popover.Title>
                                <Popover.Content>
                                <div>
                                <p className="my-0">{key.Shopname}</p>
                               <p className="my-0">{key.Description}</p>
                            </div>
                                </Popover.Content>
                            </Popover>
                            }>
                            <button className="btn btn-secondary py-0 mb-2">Info</button>
                        </OverlayTrigger>
                               </span>
                               <button className="btn btn-warning w-100" id={key._id} onClick={
                                   (e)=>{
                                       removeArticle(e.target.id)
                                         
                                   }
                               }>Remove</button>
                             
                               </div>
                       </div>
                       
                   </div>
                          )
                       })
                      
                       }       
               </div>
               
           </div>


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
          axios.post('https://myshop-12.herokuapp.com/getImage',{"imagename":this.state.pic}).then((res)=>{  
            
                            this.setState({pic:res.data})
                       })
         
     }
     
    render() {
        return (
            <>
<img src={this.state.pic} class="card-img-top" alt="fds" width="90%"   />

            </>
        )
    }
}
