import React from 'react'
import { useState,useEffect } from "react";
// import Add_category from '../admin_components/category/Add_categoty';
// import View_category from '../admin_components/category/View_category';
import { NavLink } from 'react-router-dom';
import '../admin_assets/css/Product_style.css';
import { Outlet } from 'react-router-dom';

function Category() {
    const login=localStorage.getItem('login');
    const[loginenable,setLoginenable]=useState('');
    useEffect(()=>{
    setLoginenable(login)
    },[loginenable])
    console.log(login)
    if(login){
    return ( 
        <div className='product'>
        {/* <h1>This is Category</h1> */}
        <ul>
            <li><NavLink to='Add-category'>Add Category</NavLink></li>
            <li><NavLink to='View-category'>View Category</NavLink></li>
        </ul>
        <Outlet/>
        </div>
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

export default Category;