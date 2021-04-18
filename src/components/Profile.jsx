import picpro from '../images/banner.jpg';
import axios from 'axios'
import React,{useState,useEffect,Component} from 'react'

function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const tokenData=JSON.parse(tokenString)
    return(tokenData)  
}


// export default class Profile extends Component {

//     constructor(props){
//         super(props)
//         this.state={
//             "FirstName":"","LastName":"","Address":"","toggle":false,
//              "profiledata":{},
//              "pic":'' 
//         }
//     }
//     componentDidMount(){
//         const mydata={
//             "email": getToken().emailToken
//         }
//     axios.post('http://localhost:5000/get_profile',mydata).then((res)=>{
//         this.setState({profiledata:res.data})
        
//     }).catch((gh)=>{
//         alert("Error")

// });
//     }


//      edit=()=>{
//        this.setState({toggle:true})
        
//     }

//     handleClickforImage=()=>{
//         if(this.state.pic != ''){
//             const formdata=new FormData();
//         formdata.append('pic',this.state.pic);
//         formdata.append('email',getToken().emailToken)
//         axios.post('http://localhost:5000/update_ImageForProfile',formdata).then((res)=>{
//             alert("Image Uploaded Successfully")
      
//         }).catch((er)=>{
//             alert("Some  Occured")
//         })  
//     }
//     else{
//         alert("No File Choosen")
//     }
//     }

//     updateprofile=()=>{
//         const mydata={ 
//             "FirstName":this.state.FirstName,
//             "LastName":this.state.LastName,
//             "Address":this.state.Address,
//             "email":  this.state.profiledata.Email , 
//         }
        
//         axios.post('http://localhost:5000/update_profile',mydata).then((res)=>{
//             alert("Uploaded Successfully")
      
//         }).catch((gh)=>{
//             alert("Some  Occured")
//         })
//         // console.log(updatprofiledata)
//     }


//     render() {
//         return (
//             <>
//             <div className="profile py-4">
                
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md">
//                                               <h2> Edit Information</h2>
//                                           </div>
//                                       </div>
//                                       <hr />
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md-3 col-sm-3 col-4">
//                                               {
                                                 
//                                               this.state.profiledata.Pic == '' ?
//                                               <img src={this.state.pic == ''  ? picpro : URL.createObjectURL(this.state.pic) } className='img-fluid border-primary border border-primary' alt="hello"  />
//                                               :
//                                               <MyImageItem pic={this.state.profiledata.Pic} />  
//                                               }
                                              
          
//                                           </div>
//                                           <div className="col-md-9 p-2 col-sm-9 col-8">
//                                               <input type="file" className="btn btn-primary border-0" onChange={(e)=>{this.setState.pic(e.target.files[0])}}/>
//                                               <p>Format should be .jpg,.png etc</p>
//                                               <button className="btn btn-dark border-0 px-4" onClick={this.state.handleClickforImage}>Done</button>
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md">
//                                               <h3>ACCOUNT INFORMATION</h3>
//                                           </div>
//                                       </div>
//                                       <hr/>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="" >ShopName</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control' value={this.state.profiledata.Shopname}  readonly/>
//                                           </div>
//                                       </div>
          
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">First Name</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8  " >
                                          
                                          
//                                           <input type="text" className='w-75 form-control d-inline-block' value={! this.state.toggle ? this.state.profiledata.FirstName : this.state.FirstName} 
//                                           onChange={(e)=>{this.setState({"FirstName":e.target.value})}}/>
//                                           <span class="bg-white  p-0 mx-2" onClick={this.state.edit} >
//                                           <i class="fa fa-pencil-square" aria-hidden="true"></i>
//                                           </span>
                                      
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">Last Name</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control d-inline-block'  value={!this.state.toggle ? this.state.profiledata.LastName : this.state.LastName} 
//                                               onChange={(e)=>{this.setState({"LastName":e.target.value})}}/>
//                                               <span class="bg-white  p-0 mx-2" onClick={this.state.edit}>
//                                           <i class="fa fa-pencil-square" aria-hidden="true"></i>
//                                           </span>
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">Email</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control d-inline-block' value={this.state.profiledata.Email}/>
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">Address</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control d-inline-block' value={! this.state.toggle  ? this.state.profiledata.Address:this.state.Address} 
//                                               onChange={(e)=>{this.setState({"Address":e.target.value})}}/>
//                                               <span class="bg-white  p-0 mx-2" onClick={this.state.edit}>
//                                           <i class="fa fa-pencil-square" aria-hidden="true"></i>
//                                           </span>
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">Shop Type</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control d-inline-block' value={this.state.profiledata.ShopCategory} readonly/>
                                             
//                                           </div>
//                                       </div>
//                                       <div className="row m-2 p-2 ">
                                          
//                                           <div className="col-md col-sm-6 col-6 d-flex justify-content-end  p-2">
//                                               <input type="submit" className="btn btn-warning" onClick={this.state.updateprofile} value="Update"/>
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <h3>CHANGE PASSWORD</h3>
//                                       </div>
//                                       <hr/>
                          
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">Current Password</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control' />
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">New Password</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control' />
//                                           </div>
//                                       </div>
//                                       <div className="row gx-0 m-4">
//                                           <div className="col-md col-sm-4 col-4">
//                                               <label for="">Re Password</label>
//                                           </div>
//                                           <div className="col-md col-sm-8 col-8">
//                                               <input type="text" className='w-75 form-control' />
//                                           </div>
//                                       </div>
//                                       <div className="row m-2 p-2 ">
                                          
//                                           <div className="col-md col-sm-6 col-6 d-flex justify-content-end  p-2">
//                                               <input type="submit" className="btn btn-warning"  />
//                                           </div>
//                                       </div>
//                                   </div>
//                   </>
//         )
//     }
// }


const Profile = () => {
    const [updatprofiledata, setUpdatprofiledata] =  useState({"FirstName":"","LastName":"","Address":"","toggle":false})

    const [profiledata, setprofiledata] = useState({})
       const [pic, setPic] = useState('')

        useEffect(() => {
            const mydata={
                "email": getToken().emailToken
            }
        axios.post('http://localhost:5000/get_profile',mydata).then((res)=>{
            setprofiledata(res.data)
            
        }).catch((gh)=>{
            alert("Error")
    
});
        });

        const edit=()=>{
            setUpdatprofiledata({'toggle':true})
            
        }

        const handleClickforImage=()=>{
            if(pic !== ''){
                const formdata=new FormData();
            formdata.append('pic',pic);
            formdata.append('email',getToken().emailToken)
            axios.post('http://localhost:5000/update_ImageForProfile',formdata).then((res)=>{
                alert("Image Uploaded Successfully")
          
            }).catch((er)=>{
                alert("Some  Occured")
            })  
        }
        else{
            alert("No File Choosen")
        }
        }

        const updateprofile=()=>{
            const mydata={ 
                "FirstName":updatprofiledata.FirstName,
                "LastName":updatprofiledata.LastName,
                "Address":updatprofiledata.Address,
                "email":  profiledata.Email , 
            }
            
            axios.post('http://localhost:5000/update_profile',mydata).then((res)=>{
                alert("Uploaded Successfully")
          
            }).catch((gh)=>{
                alert("Some  Occured")
            })
            console.log(updatprofiledata)
        }
    return(
        <>
  <div className="profile py-4">
      
                            <div className="row gx-0 m-4">
                                <div className="col-md">
                                    <h2> Edit Information</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="row gx-0 m-4">
                                <div className="col-md-3 col-sm-3 col-4">
                                    {
                                       
                                    profiledata.Pic === '' || profiledata.Pic == null?
                                    <img src={pic === '' ? picpro : URL.createObjectURL(pic) } className='img-fluid border-primary border border-primary' alt="hello"  />
                                    :
                                
                                    <MyImageItem pic={profiledata.Pic} />  
                                    }
                                    

                                </div>
                                <div className="col-md-9 p-2 col-sm-9 col-8">
                                    <input type="file" className="btn btn-primary border-0" onChange={(e)=>{setPic(e.target.files[0])}}/>
                                    <p>Format should be .jpg,.png etc</p>
                                    <button className="btn btn-dark border-0 px-4" onClick={handleClickforImage}>Done</button>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md">
                                    <h3>ACCOUNT INFORMATION</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="" >ShopName</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control' value={profiledata.Shopname}  readonly/>
                                </div>
                            </div>

                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">First Name</label>
                                </div>
                                <div className="col-md col-sm-8 col-8  " >
                                
                                
                                <input type="text" className='w-75 form-control d-inline-block' value={! updatprofiledata.toggle ? profiledata.FirstName : updatprofiledata.FirstName} onChange={(e)=>{setUpdatprofiledata({...updatprofiledata,"FirstName":e.target.value})}}/>
                                <span class="bg-white  p-0 mx-2" onClick={edit} >
                                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                </span>
                            
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Last Name</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control d-inline-block'  value={! updatprofiledata.toggle ?profiledata.LastName:updatprofiledata.LastName} onChange={(e)=>{setUpdatprofiledata({...updatprofiledata,"LastName":e.target.value})}}/>
                                    <span class="bg-white  p-0 mx-2" onClick={edit}>
                                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                </span>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Email</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control d-inline-block' value={profiledata.Email}/>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Address</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control d-inline-block' value={! updatprofiledata.toggle  ? profiledata.Address:updatprofiledata.Address} onChange={(e)=>{setUpdatprofiledata({...updatprofiledata,"Address":e.target.value})}}/>
                                    <span class="bg-white  p-0 mx-2" onClick={edit}>
                                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                </span>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Shop Type</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control d-inline-block' value={profiledata.ShopCategory} readonly/>
                                   
                                </div>
                            </div>
                            <div className="row m-2 p-2 ">
                                
                                <div className="col-md col-sm-6 col-6 d-flex justify-content-end  p-2">
                                    <input type="submit" className="btn btn-warning" onClick={updateprofile} value="Update"/>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <h3>CHANGE PASSWORD</h3>
                            </div>
                            <hr/>
                
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Current Password</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control' />
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">New Password</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control' />
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Re Password</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control' />
                                </div>
                            </div>
                            <div className="row m-2 p-2 ">
                                
                                <div className="col-md col-sm-6 col-6 d-flex justify-content-end  p-2">
                                    <input type="submit" className="btn btn-warning"  />
                                </div>
                            </div>
                        </div>
        </>
    )
}


export default Profile;




class MyImageItem extends Component {
    constructor(props){
        super(props)
        this.state={
            pic:this.props.pic
        }
        console.log('log')
        console.log(this.props.pic)
    }

    componentDidMount(){
         axios.post('http://localhost:5000/getImage',{"imagename":this.state.pic}).then((res)=>{  
           
                           this.setState({pic:res.data})
                      })
        
    }
    
   render() {
       return (
           <>
<img src={this.state.pic}  className='img-fluid border-primary border border-primary' alt="bye"   />

           </>
       )
   }
}
