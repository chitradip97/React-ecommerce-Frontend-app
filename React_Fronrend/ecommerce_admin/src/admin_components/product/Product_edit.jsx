import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Product_edit(props) {
    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[quantity,setQuantity]=useState("");

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setPrice(localStorage.getItem('price'));
        setQuantity(localStorage.getItem('quantity'));
        
        
    },[]);
    const handleUpdate=()=>{
        axios.put(`http://127.0.0.1:1234/api/products/${id}`,{price:price,quantity:quantity})
        .then(()=>{
            props.setprodposition(true);
        })
    }
    return ( 
        <>
            <div class="container-fluid">
                
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                    <div className="card  mb-4 ">
                        <div className="card-footer"> 
                        <span id="alert_contain"></span>    
                        <h5 className="basic_font">Edit Product</h5> 
                        </div>
                        <div className="card-body">
                        <form >
                                <div className="mb-3 mt-1">
                                <label for="product_name" className="form-label basic_font">Product :</label>
                                <input type="text" className="form-control prod_nm" name="prod_nm" id="product_name" placeholder="Enter your Product name" value={name} readOnly/>
                                </div>
                               
                                <div className="row mb-3 mt-1"  >
                                    <div className="col-xl-6 col-md-12">
                                        <label for="product_price" className="form-label basic_font ">Price :</label>
                                        <input type="number" className="form-control prod_price" name="prod_price" id="product_price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <label for="product_quantity" className="form-label basic_font ">Quantity :</label>
                                        <input type="number" className="form-control prod_qnty" name="prod_quantity" id="product_quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
                                    </div>
                                </div>    
                                
                                <input type="button" className="btn btn-primary" id="f1" name="product_add_btn" value="ADD" onClick={handleUpdate}/>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </>
     );
}

export default Product_edit;