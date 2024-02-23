import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add_category() {
    const [catName,setCatname]=useState("");
    const [catStock,setCatstock]=useState("");
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
            <div class="container-fluid">
                
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                    <div className="card  mb-4 ">
                        <div className="card-footer"> 
                        <span id="alert_contain"></span>    
                        <h5 className="basic_font">Add Category</h5> 
                        </div>
                        <div className="card-body">
                        <form >
                                <div className="mb-3 mt-1">
                                <label for="category_name" className="form-label basic_font">Category name :</label>
                                <input type="text" className="form-control cat_nm" name="category_nm" id="category_name" placeholder="Enter your Category name" onChange={(e)=>{setCatname(e.target.value)}}/>
                                </div>
                               
                                <div className="mb-3 mt-1">
                                <label for="comment" className="form-label basic_font">Category stock :</label>
                                <input type="number" className="form-control cat_dec" name="category_nm" id="comment" placeholder="Enter your Category stock" onChange={(e)=>{setCatstock(e.target.value)}}/>
                                
                                </div>
                                
                                <input type="button" className="btn btn-primary" id="f1" name="caterory_add_btn" value="ADD" onClick={handleSubmit}/>
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

export default Add_category;