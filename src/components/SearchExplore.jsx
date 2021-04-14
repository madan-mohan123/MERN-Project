import item from '../images/lh6.jpg';
import {Dropdown} from 'react-bootstrap';
const SearchExplore=()=>{

return(

<>
<section className="m-2" >
        <div className="row gx-0 p-2">
           <div className="col-md-9 mx-auto">
               <div className="row gx-0 ">
                <div className="col">
                <Dropdown>
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
                </Dropdown>
                </div>
                <div className="col">
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
                 <div className="col">
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
                 <div className="col">
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
                 <div className="col">
                 <Dropdown>
  <Dropdown.Toggle variant="mute" style={{'box-shadow':'0 0 2px grey'}}>
    Sports
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item to="#/action-1">Cricket</Dropdown.Item>
    <Dropdown.Item to="#/action-2">Tennis</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Football</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Polo</Dropdown.Item>
    <Dropdown.Item to="#/action-3">Basket ball</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                 </div>
                 <div className="col">
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
    <div className="row gx-0" >
        <div className="col-md-2 my-2" >
            <section className="left-side-bar p-2" style={{"height": "100vh"}} >
                <h5>Filter</h5>
                <hr />
                <p>Categories</p>
                <hr />
                <h6>Brands</h6>
               <form >
                <div className="form-group">
                    <input type="checkbox" name="" id="" /> Puma
                    
                </div>
                <div className="form-group">
                 <input type="checkbox" name="" id="" /> Addidas
                 
             </div>
             <div className="form-group">
                 <input type="checkbox" name="" id="" /> Nike
                 
             </div>
             <div className="form-group">
                 <input type="checkbox" name="" id="" /> Reebok
                 
             </div>
               </form>
               <hr />
               <h6>Price</h6>
               <div className="progress progress-bar-striped bg-warning my-2">
               </div>
               <form>
                   <div className="form-group d-inline " >
                     <input type="text" name="" id="" placeholder="Min" style={{"width": "80px"}} />
                   </div>
                   to
                   <div className="form-group d-inline">
                   <select name="" id="">
                       <option value="100">RS 100</option>
                       <option value="100">Rs 500</option>
                       <option value="100">Rs 1000</option>
                       <option value="100">Rs 1500</option>
                   </select>
                  </div>
               </form>


            </section>
        </div>
        <div className="col-md-10 px-2 my-2" >
            <section className="left-side-bar p-2">
            <p>Home &gt; Foot &gt; Wear</p>
            <p>Mens Wears (Showing result 1-20 from 100)</p>
            <hr />
            <article>
                <div className="row gx-0 ">
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8;"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                           </div>
                           
                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                             </div>
                           
                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                           </div>
                           
                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                           </div>
                           
                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <div className="card border-0">
                            <img src={item} alt="" />
                            <div className="my-2">
                                <p className=" my-0" style={{"opacity": "0.8"}} >PUMA</p>
                                <p className=" m-0 p-0 ">Zod Runner v3 for men</p>
                                <p className="m-0 p-0 "><b>Rs 1067</b> <span style={{"textDecoration": 'line-through',' opacity':'0.7','fontSize':'13px'}}>Rs 9000</span> <span style={{"color": 'green','font-size':'13px'}}><b>40% off</b></span></p>
                                <p style={{"color": 'green','fontSize':'13px'}}>Buy 100 more,save extra 15%</p>
                           </div>
                           
                        </div>
                    </div>
                </div>
                
                
                
               
            </article>
            </section>
        </div>
    </div>
    </div>


</>
)


}
export default SearchExplore;