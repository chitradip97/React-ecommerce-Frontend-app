import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Category_edit(props) {
    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[stock,setStock]=useState("");

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setStock(localStorage.getItem('stock'));
        
        
    },[]);
    const handleUpdate=()=>{
        axios.put(`http://127.0.0.1:1234/api/category/${id}`,{name:name,stock:stock})
        .then(()=>{
            props.setcatposition(true);
        })
    }

    return ( 
        <div class="container-fluid">
                
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                    <div className="card  mb-4 ">
                        <div className="card-footer"> 
                        <span id="alert_contain"></span>    
                        <h5 className="basic_font">Edit Category</h5> 
                        </div>
                        <div className="card-body">
                        <form >
                                <div className="mb-3 mt-1">
                                <label for="category_name" className="form-label basic_font">Category name :</label>
                                <input type="text" className="form-control cat_nm" name="category_nm" id="category_name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                </div>
                               
                                <div className="mb-3 mt-1">
                                <label for="comment" className="form-label basic_font">Category stock :</label>
                                <input type="number" className="form-control cat_dec" name="category_nm" id="comment" value={stock} onChange={(e)=>{setStock(e.target.value)}}/>
                                
                                </div>
                                
                                <input type="button" className="btn btn-primary" id="f1" name="caterory_add_btn" value="ADD" onClick={handleUpdate}/>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
     );
}

export default Category_edit;