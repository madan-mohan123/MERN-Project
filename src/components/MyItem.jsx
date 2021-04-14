import headphone from '../images/mobile/head.jpg';
// import dashboardcss from '../components/css/dashboard.css';
import axios from 'axios'
import React, { Component } from 'react'
var i=0;
var myemail="hello";
export default class MyItem extends Component {

    constructor(props){
        super(props)
        this.state={
            dataList:[],
            email:'',
        }
    }
    componentDidMount(){
       console.log("Comp=======")
      
            if(i==0){
                console.log(this.props.data)
                // this.setState({"email":this.props.data}) 
                myemail= this.props.data;
                i++; 
          
        }
console.log(myemail)
        axios.post('http://localhost:5000/get_items',{"email":myemail}).then((res)=>{
            
            this.setState({dataList:res.data})
           
      
        }).catch((gh)=>{
        
           
    
});
    }

    render() {
        return (
            <>
            < div class="myitems" >
               <div class="row gx-0" >
          
                      {this.state.dataList.map((key,index)=>{
                          return(
                       
                       <div class="col-md-4 col-sm-6   p-2  d-flex justify-content-center">
                       <div class="card mx-4 my-2" style={{width: '18rem'}}>
                           <img src={headphone} class="card-img-top" alt="..." width="90%"   />
                               <div class="card-body">
                               <h5 className="card-title text-center">{key.Name}</h5>
                               <p className="my-0"><span className="text-warning"><b>ShopName:</b></span> {key.Shopname}</p>
                               <p className="my-0"><span className="text-primary"><b>Brand:</b></span> {key.Brand}</p>
                               <p className="my-2"><span style={{color:"green",fontSize:"20px"}}><b>{key.Cost}</b></span></p>
                               {/* <button className="btn btn-warning">Shop now</button> */}
                               </div>
                       </div>
                       
                   </div>
                          )
                       })}
                  
                   
               </div>
           </div>


</>
        )
    }
}

// const Myitem= (props)=>{

//         const [dataList, setDataList] = useState([])
//         const [email, setemail] = useState('')
       
//         useEffect(() => {
//          if(i==0){
//              console.log(props.data)
//              setemail(props.data)  
//              i++; 
//          }

//         axios.post('http://localhost:5000/get_items',{"email":email}).then((res)=>{
            
//             setDataList(res.data)
           
      
//         }).catch((gh)=>{
        
           
    
// });
//         });


//     return(

//         <>
//                          < div class="myitems" >
//                             <div class="row gx-0" >
                       
//                                    {dataList.map((key,index)=>{
//                                        return(
                                    
//                                     <div class="col-md-4 col-sm-6   p-2  d-flex justify-content-center">
//                                     <div class="card mx-4 my-2" style={{width: '18rem'}}>
//                                         <img src={headphone} class="card-img-top" alt="..." width="90%"   />
//                                             <div class="card-body">
//                                             <h5 className="card-title text-center">{key.Name}</h5>
//                                             <p className="my-0"><span className="text-warning"><b>ShopName:</b></span> {key.Shopname}</p>
//                                             <p className="my-0"><span className="text-primary"><b>Brand:</b></span> {key.Brand}</p>
//                                             <p className="my-2"><span style={{color:"green",fontSize:"20px"}}><b>{key.Cost}</b></span></p>
//                                             {/* <button className="btn btn-warning">Shop now</button> */}
//                                             </div>
//                                     </div>
                                    
//                                 </div>
//                                        )
//                                     })}
                               
                                
//                             </div>
//                         </div>


//         </>
//     )
// }

// export default Myitem;