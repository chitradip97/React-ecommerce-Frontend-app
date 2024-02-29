import React from 'react'
import { NavLink } from 'react-router-dom';
import '../admin_assets/css/Product_style.css';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Customer() {
    const [customers, setcustomers] = useState([]);
    async function getAllcustomer() {
    try {
        const customers_all = await axios.get(
          "http://127.0.0.1:1234/api/customer-view"
        );
        console.log(customers_all.data);
        setcustomers(customers_all.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      
        getAllcustomer();
    }, []);
    const handleDelete=(id)=>{
    
        axios.delete(`http://127.0.0.1:1234/api/customer-view/${id}`).then(()=>{getAllcustomer()})
       }
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
                        <div class="card-footer"> <h5 class="basic_font">Customer List :</h5> </div>
                        <div class="card-body ">
                            
                                           
                                <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Customer NAME</th>
                                    <th>Customer Email</th>
                                    <th>Customer Phone</th>
                                    <th>Customer Address</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {customers.map((customer, i) => {
                                    return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{customer.customer_name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.address}</td>
                                        <td><button className="btn btn-danger"
                                          onClick={()=>{handleDelete(customer.id)}}
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

export default Customer;