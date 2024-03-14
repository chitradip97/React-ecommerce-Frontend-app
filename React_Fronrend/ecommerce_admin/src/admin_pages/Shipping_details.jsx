import React from 'react';
import { NavLink } from 'react-router-dom';
import '../admin_assets/css/Product_style.css';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Shipping_details() {
    const [ship_detail, setShip_detail] = useState([]);
    async function getAllorder() {
    try {
        const orders_all = await axios.get(
          "http://127.0.0.1:1234/api/shipping-details"
        );
        console.log(orders_all.data);
        setShip_detail(orders_all.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      
        getAllorder();
    }, []);
    // const handleDelete=(id)=>{
    
    //     axios.delete(`http://127.0.0.1:1234/api/customer-view/${id}`).then(()=>{getAllcustomer()})
    //    }
       const login=localStorage.getItem('login');
       const[loginenable,setLoginenable]=useState('');
       useEffect(()=>{
       setLoginenable(login)
       },[loginenable])
       console.log(login)
       if(login)
       {
       return ( 
           // <>
          
   
           //    <div className='product'>
           // {/* <h1>This is Product</h1> */}
           // <ul>
           //     <li><NavLink to='Customer-details'>Customer-details</NavLink></li>
           //     <li><NavLink to='Customer-purchase'>Customer-purchase</NavLink></li>
           // </ul>
           // <div className='prod_box'>
           // <Outlet/>
           // </div>
           
           // </div>
           // </>
           <>
        {/* <h1>This is customer page</h1> */}
           <div class="content_section">
                   <div class="container-fluid">
                   
                   <div class="row">
                       <div class="col-xl-12 col-md-12">
                       <div class="card  ">
                           <div class="card-footer"> <h5 class="basic_font">Shipping Details :</h5> </div>
                           <div class="card-body ">
                               
                                              
                                   <table class="table table-striped">
                                   <thead>
                                   <tr>
                                   <th> sr. Id</th>
                                    <th>Shipping Id.</th>
                                    <th>Customer id.</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                   </tr>
                                   </thead>
                                   <tbody>
   
                                   {ship_detail.map((order, i) => {
                                       return (
                                       <tr key={i}>
                                           <td>{i+1}</td>
                                           <td>{order.id}</td>
                                           <td>{order.Customer_id}</td>
                                           <td>{order.Shipping_Fname}</td>
                                           <td>{order.Shipping_Lname}</td>
                                           <td>{order.Phone}</td>
                                           <td>{order.Email}</td>
                                           <td><button className="btn btn-danger"
                                            //  onClick={()=>{handleDelete(order.id)}}
                                            >Delete</button></td>
                                       </tr>
                                       // <h2 key={i}>
                                           // {/* {student.stuname}={student.email} */}
                                       // </h2>
                                       );
                                   })}
                                   </tbody>
                                   </table>
   
   
   
                                   
                               
                               
                           </div>
                       </div>
                       </div>
                       
                   </div>
                   </div>
                   
                  
              </div>
       </>
        );
       }
       else{
           return(
             <>
               <div className="container mx-4 mt-2 ">
                 <div className="row">
                 <div class="alert alert-danger">
                   <strong>Permission denied!</strong> Please Login first.
                 </div>
       
                 </div>
               {/* <h1>Please Login first</h1> */}
               </div>
             </>
       
           )
           
         }
}

export default Shipping_details;