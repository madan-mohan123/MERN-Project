import picpro from '../images/purchase.jpg';
import axios from 'axios'
import React,{useState,useEffect,Component} from 'react'

function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const tokenData=JSON.parse(tokenString)
    return(tokenData)  
}



const Profile = () => {
    const [updatprofiledata, setUpdatprofiledata] =  useState({"FirstName":"","LastName":"","Address":"","toggle":false})

    const [profiledata, setprofiledata] = useState({})
       const [pic, setPic] = useState('')

        useEffect( () => {
         
            const mydata={
                "email": getToken().emailToken
            }
        axios.post('http://localhost:5000/get_profile',mydata).then( (res)=>{
            setprofiledata(res.data)

            
        }).catch((gh)=>{
            alert("Error")
    
});
        },[]);

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
                                <div className="col-md-4 col-sm-6  mx-2 col-lg-3 col-6">
                                    {
                                       
                                    ( profiledata.Pic != null && pic === '') ?
                                    <MyImageItem pic={profiledata.Pic} />
                                    :
                                    <img src={pic === '' ? picpro : URL.createObjectURL(pic) } className='border-primary border border-primary w-100' alt="hello" style={{height:'200px'}} />
                                    }
                                    

                                </div>
                                <div className="col-md-6 p-2 col-sm-8 col-8 col-lg-8">
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
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="" >ShopName</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
                                    <input type="text" className='w-75 form-control ' value={profiledata.Shopname}  readonly/>
                                </div>
                            </div>

                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">First Name</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12" >
                                
                                
                                <input type="text" className='w-75 form-control d-inline-block' value={! updatprofiledata.toggle ? profiledata.FirstName : updatprofiledata.FirstName} onChange={(e)=>{setUpdatprofiledata({...updatprofiledata,"FirstName":e.target.value})}}/>
                                <span class="bg-white  p-0 mx-2" onClick={edit} >
                                <i class="fa fa-pencil-square" style={{color:'green'}}></i>
                                </span>
                            
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">Last Name</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
                                    <input type="text" className='w-75 form-control d-inline-block'  value={! updatprofiledata.toggle ?profiledata.LastName:updatprofiledata.LastName} onChange={(e)=>{setUpdatprofiledata({...updatprofiledata,"LastName":e.target.value})}}/>
                                    <span class="bg-white  p-0 mx-2" onClick={edit}>
                                <i class="fa fa-pencil-square" style={{color:'green'}}></i>
                                </span>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">Email</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
                                    <input type="text" className='w-75 form-control d-inline-block' value={profiledata.Email}/>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">Address</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
                                    <input type="text" className='w-75 form-control d-inline-block' value={! updatprofiledata.toggle  ? profiledata.Address:updatprofiledata.Address} onChange={(e)=>{setUpdatprofiledata({...updatprofiledata,"Address":e.target.value})}}/>
                                    <span class=" p-0 mx-2" onClick={edit}>
                                <i class="fa fa-pencil-square" style={{color:'green'}}></i>
                                </span>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">Shop Type</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
                                    <input type="text" className='w-75 form-control d-inline-block' value={profiledata.ShopCategory} readonly/>
                                   
                                </div>
                            </div>
                            <div className="row m-2 p-2 ">
                                
                                <div className="col-md col-sm-6 col-6 d-flex justify-content-end  p-2">
                                    <input type="submit" className="btn btn-secondary" onClick={updateprofile} value="Update"/>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <h3>CHANGE PASSWORD</h3>
                            </div>
                            <hr/>
                
                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">Current Password</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
                                    <input type="text" className='w-75 form-control' />
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">New Password</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
                                    <input type="text" className='w-75 form-control' />
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md-6 col-sm-4 col-lg-6 col-12">
                                    <label for="">Re Password</label>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-8 col-12">
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
<img src={this.state.pic}  className='img-fluid border-primary border border-primary w-100' alt="bye"   />

           </>
       )
   }
}
