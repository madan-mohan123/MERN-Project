import picpro from '../images/banner.jpg';
import axios from 'axios'
import React,{useState,useEffect} from 'react'
const Profile = () => {

    const [profiledata, setprofiledata] = useState([])
       
        useEffect(() => {
  
        axios.post('http://localhost:5000/get_profile').then((res)=>{
            
            setprofiledata(res.data)
           
      
        }).catch((gh)=>{
            alert("Errot")
    
});
        });

        const [updatprofiledata, setUpdatprofiledata] = useState({"First Name":"","Last Name":"","Address":"","Email":"","ShopName":"","ShopCategory":"","Password":""})


        const updateprofile=()=>{

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
                                    <img src={picpro} className='img-fluid border-primary border border-primary' alt=""  />
                                </div>
                                <div className="col-md-9 p-2 col-sm-9 col-8">
                                    <button className="btn btn-primary border-0" >
                                        Choose Pic
                                    </button>
                                    <p>Format should be .jpg,.png etc</p>
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
                                    <input type="text" className='w-75 form-control' value="Madan@gmail.com" />
                                </div>
                            </div>

                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">First Name</label>
                                </div>
                                <div className="col-md col-sm-8 col-8  " >
                                
                                
                                <input type="text" className='w-75 form-control d-inline-block' value={profiledata.First} onChange={(e)=>{setUpdatprofiledata({...updateprofile,"First Name":e.target.value})}}/>
                                <span class="bg-white  p-0 mx-2" >
                                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                </span>
                            
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Last Name</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control d-inline-block' value="mohan" onChange={(e)=>{setUpdatprofiledata({...updateprofile,"Last Name":e.target.value})}}/>
                                    <span class="bg-white  p-0 mx-2" >
                                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                </span>
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Email</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control d-inline-block' value="Madan@gmail.com" />
                                </div>
                            </div>
                            <div className="row gx-0 m-4">
                                <div className="col-md col-sm-4 col-4">
                                    <label for="">Address</label>
                                </div>
                                <div className="col-md col-sm-8 col-8">
                                    <input type="text" className='w-75 form-control d-inline-block' value="Sant Nagar" />
                                    <span class="bg-white  p-0 mx-2" >
                                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                </span>
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
                                    <input type="submit" className="btn btn-warning" />
                                </div>
                            </div>
                        </div>
        </>
    )
}


export default Profile;