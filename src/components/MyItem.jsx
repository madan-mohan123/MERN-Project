import headphone from '../images/mobile/head.jpg';
import axios from 'axios'
import React, { Component } from 'react'
import DeleteItem from './pages/DeleteItem';
function getTokenEmail(){
    const tokenString = sessionStorage.getItem('token');
    const tokenemail=JSON.parse(tokenString).emailToken
    return(tokenemail)
  
}


function removeArticle(data){
    console.log(data)
    axios.post('http://localhost:5000/delete_items',{"id":data}).then((res)=>{  
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
        
        axios.post('http://localhost:5000/get_items',{"email":getTokenEmail()}).then((res)=>{  
            
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
                       
                       <div class="col-md-3 col-sm-6   p-2  d-flex justify-content-center">
                       <div class="card mx-2 my-2" style={{width: '18rem'}}>
                           < MyImageItem pic={key.Pic}/>
                               <div class="card-body">
                               <h5 className="card-title text-center">{key.Name}</h5>
                               <p className="my-0"><span className="text-warning"><b>ShopName:</b></span> {key.Shopname}</p>
                               <p className="my-0"><span className="text-primary"><b>Brand:</b></span> {key.Brand}</p>
                               <p className="my-2"><span style={{color:"green",fontSize:"20px"}}><b>{key.Cost}</b></span></p>
                               <button className="btn btn-warning" id={key._id} onClick={
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
          axios.post('http://localhost:5000/getImage',{"imagename":this.state.pic}).then((res)=>{  
            
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
