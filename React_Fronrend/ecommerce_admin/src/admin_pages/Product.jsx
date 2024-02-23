import React from 'react';
import { NavLink } from 'react-router-dom';
import '../admin_assets/css/Product_style.css';
import { Outlet } from 'react-router-dom';

function Product() {
    return ( 
        <div className='product'>
        {/* <h1>This is Product</h1> */}
        <ul>
            <li><NavLink to='Add-product'>Add Product</NavLink></li>
            <li><NavLink to='View-product'>View Product</NavLink></li>
        </ul>
        <div className='prod_box'>
        <Outlet/>
        </div>
        
        </div>
     );
}

export default Product;