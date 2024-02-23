import React from 'react'
// import Add_category from '../admin_components/category/Add_categoty';
// import View_category from '../admin_components/category/View_category';
import { NavLink } from 'react-router-dom';
import '../admin_assets/css/Product_style.css';
import { Outlet } from 'react-router-dom';

function Category() {
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

export default Category;