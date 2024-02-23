import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add_product() {
    const [prodName,setProdname]=useState("");
    const [proddesc,setProddesc]=useState("");
    const [prodprice,setProdprice]=useState("");
    const [prodqnty,setProdqnty]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
            axios.post("http://127.0.0.1:1234/api/category",{catName:catName,catStock:catStock})
               .then((Response)=>{
                   console.log(Response.data);
                   setCatname(" ");
                   setCatstock(" ");
                   toast.success("Insert Successfully!",{
                    position: "top-center",
                   });
               })  
       }
    return ( 
        <>
        {/* <h1>This is add product</h1> */}
        <div className="container-fluid">
                
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                    <div className="card  mb-4 ">
                        <div className="card-footer"> 
                        <span id="alert_contain"></span>    
                        <h5 className="basic_font">Add Product</h5> 
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="mb-3 mt-1 col-xl-12">
                                <label for="product_category" className="form-label basic_font">Category :</label>
                                {/* <input type="text" className="form-control cat_nm" name="prod_category" id="product_category" placeholder="Enter your Category name"/>  */}
                                <select className="form-control cat_nm" name="prod_category" id="product_category">
                                <option value="">--select--</option>
                               
                                </select>
                                </div>
                                <div className="mb-3 mt-1">
                                <label for="product_name" className="form-label basic_font">Product :</label>
                                <input type="text" className="form-control prod_nm" name="prod_nm" id="product_name" placeholder="Enter your Product name" onChange={(e)=>{setProdname(e.target.value)}}/>
                                </div>
                               
                                <div className="mb-3 mt-1">
                                <label for="product_dec" className="form-label basic_font ">Category Description :</label>
                                <textarea className="form-control prod_dec" placeholder="Enter your Product Descrption" rows="3" id="product_dec" name="description" onChange={(e)=>{setProddesc(e.target.value)}}></textarea>
                                </div>
                                <div className="row mb-3 mt-1"  >
                                    <div className="col-xl-6 col-md-12">
                                        <label for="product_price" className="form-label basic_font ">Price :</label>
                                        <input type="number" className="form-control prod_price" name="prod_price" id="product_price" onChange={(e)=>{setProdprice(e.target.value)}}/>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <label for="product_quantity" className="form-label basic_font ">Quantity :</label>
                                        <input type="number" className="form-control prod_qnty" name="prod_quantity" id="product_quantity" onChange={(e)=>{setProdqnty(e.target.value)}}/>
                                    </div>
                                </div>
                                <input type="button" className="btn btn-primary" id="prod" name="Product_add_btn" value="ADD"/>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <ToastContainer />
        </>
     );
}

export default Add_product;