import React from 'react'
import { NavLink } from 'react-router-dom';
import '../admin_assets/css/Product_style.css';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Orders() {
    const [orders, setOrders] = useState([]);
    async function getAllorder() {
    try {
        const orders_all = await axios.get(
          "http://127.0.0.1:1234/api/orders"
        );
        console.log(orders_all.data);
        setOrders(orders_all.data);
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
                           <div class="card-footer"> <h5 class="basic_font">Order List :</h5> </div>
                           <div class="card-body ">
                               
                                              
                                   <table class="table table-striped">
                                   <thead>
                                   <tr>
                                   <th>Order sr. Id</th>
                                    <th>Customer Id.</th>
                                    <th>Tracking no.</th>
                                    <th>Invoice No</th>
                                    <th>Total Amount</th>
                                    <th>Order Date</th>
                                    <th>Payment Status</th>
                                    <th>Action</th>
                                   </tr>
                                   </thead>
                                   <tbody>
   
                                   {orders.map((order, i) => {
                                       return (
                                       <tr key={i}>
                                           <td>{i+1}</td>
                                           <td>{order.customer_id}</td>
                                           <td>{order.tracking_no}</td>
                                           <td>{order.invoice_no}</td>
                                           <td>{order.total_amount}</td>
                                           <td>{order.tracking_no}</td>
                                           <td>{order.payment_mode}</td>
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
   
   
   
                                    {/* <tr>
                                       <td>1</td>
                                       <td>Shusant Khan</td>
                                       <td>susanta@gmail.com</td>
                                       <td>7925462360</td>
                                       <td>Kolkata</td>
                                       <td>
                                       <a href="view_customer_edit.php"><button type="button" class="btn btn-success">Edit</button></a>
                                       <a href="view_customer_delete.php"><button type="button" class="btn btn-danger">Delete</button></a>
                                       </td>
                                   </tr>
                                   <tr>
                                       <td>2</td>
                                       <td>Rajib Rawat</td>
                                       <td>Rajib@gmail.com</td>
                                       <td>8569354628</td>
                                       <td>Dumdum</td>
                                       <td>
                                       <a href="view_customer_edit.php"><button type="button" class="btn btn-success">Edit</button></a>
                                       <a href="view_customer_delete.php"><button type="button" class="btn btn-danger">Delete</button></a>
                                       </td>
                                   </tr>
                                   <tr>
                                       <td>3</td>
                                       <td>Aman Guha</td>
                                       <td>aman@gmail.com</td>
                                       <td>7965354985</td>
                                       <td>Siliguri</td>
                                       <td>
                                       <a href="view_customer_edit.php"><button type="button" class="btn btn-success">Edit</button></a>
                                       <a href="view_customer_delete.php"><button type="button" class="btn btn-danger">Delete</button></a>
                                       </td>
                                   </tr>
                                  
                                   </tbody>
                                   </table> */}
                               
                               
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

export default Orders;