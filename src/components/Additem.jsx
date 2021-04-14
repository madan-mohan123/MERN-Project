
import axios from 'axios'
import React,{useState,useEffect} from 'react'
var i=0;


const Additem = (props) => {


    useEffect(() => {
        if(i==0){
            setemail(props.data)   
        }
    })

const [name, setName] = useState('')
const [cost, setCost] = useState('')
const [category, setCategory] = useState('')
const [pbrand, setPbrand] = useState('')
const [shopname] = useState('A to Z Store')
const [desc, setDesc] = useState('')
const [pic, setPic] = useState('')
const [discount, setDiscount] = useState('')
const [email, setemail] = useState('')



const uploadData=(e)=>{
e.preventDefault();

    const formdata=new FormData();
    formdata.append('pic',pic);
    formdata.append('name',name);
    formdata.append('cost',cost);
    formdata.append('category',category);
    formdata.append('shopname',shopname);
    formdata.append('desc',desc);
    formdata.append('pbrand',pbrand);
    formdata.append('discount',discount);
    formdata.append('email',email)
//    const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     };
    console.log(formdata)
         axios.post('http://localhost:5000/save_items',formdata).then((res)=>{
        alert("Item is Uploaded Successfully")
  
    }).catch((gh)=>{
        alert("Some Erroe Occured")
    })
   
   
}



    return(
       <>
     <div className="additembox" >
          <form onSubmit={onsubmit} encType="multitype">
                            <div className="row m-2 p-2 gx-0">
                                <div className="col-md-3 col-sm-4 col-4" >
                                    <img src="E:\ReactProject\myshopserver/public/giga.jpg" alt="nn" class='product-logo img-fluid' style={{height:"200px"}} />
                                   
                                </div>
                                <div className="col-md-4 col-sm-2 col-4 py-4"  >
                                  
                                   <input type="file"  onChange={(e)=>{setPic(e.target.files[0])}}/>
                                </div>
                                
                            </div>
                            <hr />
                            <div className="row m-2 p-2 ">
                                <div className="col-md-3 col-sm-3 col-3 ">
                                    <label for="">Product Name</label>
                                </div>
                                
                                <div className="col-md-9 col-sm-9 col-9" >
                                    <input type="text" className='w-75 form-control' onChange={(e)=>{setName(e.target.value)}} placeholder="Product Name" value={name} />
                                </div>    
                            </div>
                            <div className="row m-2 p-2">
                                <div className="col-md-3 col-sm-3 col-3">
                                    <label for="">Cost</label>
                                </div>
                                <div className="col-md-9 col-sm-9 col-9 ">
                                    <input type="text" className='w-75 form-control' placeholder="Cost" value={cost} onChange={(e)=>{setCost(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row m-2 p-2 ">
                                <div className="col-md-3 col-sm-3 col-3">
                                    <label for="">Category</label>
                                </div>
                                <div className="col-md-9 col-sm-9 col-9 ">
                                    <select name="" onChange={(e)=>{setCategory(e.target.value)
                                    }} id="" className='w-75 form-control '>
                                        <optgroup>
                                            <option value="Electronics">Electronic</option>
                                            <option value="Garments">Garments</option>
                                            <option value="Mobiles">Mobiles</option>
                                            <option value="Toys">Toys</option>
                                            <option value="Interior">Interior</option>
                                            <option value="Menswear">Mens'wear</option>
                                            <option value="womenswear">Women's wear</option>
                                            <option value="others">Others</option>
                                            <option value="children">Children</option>


                                        </optgroup>
                                    </select>

                                </div>
                                
                            </div>
                            <div className="row m-2 p-2">
                                <div className="col-md-3 col-sm-3 col-3">
                                    <label for="">Brand</label>
                                </div>
                                <div className="col-md-9 col-sm-9 col-9 ">
                                    <input type="text" className='w-75 form-control'  value={pbrand} onChange={(e)=>{setPbrand(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row m-2 p-2">
                                <div className="col-md-3 col-sm-3 col-3">
                                    <label for="">Discount</label>
                                </div>
                                <div className="col-md-9 col-sm-9 col-9 ">
                                    <input type="text" className='w-75 form-control'  value={discount} onChange={(e)=>{setDiscount(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row m-2 p-2 ">
                                <div className="col-md-3 col-sm-3 col-3">
                                    <label for="">Description</label>
                                </div>
                                <div className="col-md-9 col-sm-9 col-9">
                                    <textarea name="" id="" cols="50" rows="5" className='form-control w-75' value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                                </div>
                            </div>
                
                            <div className="row m-2 p-2 ">
                                <div className="col-md col-sm-6 col-6 d-flex justify-content-center align-items-center p-2">
                                    <input type="reset" value="Reset" className="btn btn-warning"/>
                                </div>
                                <div className="col-md col-sm-6 col-6 d-flex justify-content-center align-items-center p-2">
                                    <input type="submit" className="btn btn-warning" onClick={uploadData}/>
                                </div>
                            </div>
                            </form>
                        </div> 

</>
    )
}

export default Additem;