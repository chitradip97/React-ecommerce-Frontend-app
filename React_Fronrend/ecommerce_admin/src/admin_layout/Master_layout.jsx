import React from 'react'

// layout
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
 import '../admin_assets/css/styles.css';
 import '../admin_assets/js/scripts.js';
 import { Outlet } from 'react-router-dom';

//  Components
// import Dashboard from '../pages/admin_pages/Dashboard';

function Master_layout() {
    return ( 
    <>
    <div className='sb-nav-fixed'>
    <Navbar/>
    <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
        <Sidebar/>
        </div >
    
    <div id='layoutSidenav_content'>
        <main>
        {/* content component will be attached here */}
        {/* <h1 style={{color:'red'}}>Master File</h1> */}
        <Outlet/>
        </main>
        <Footer/>
    </div>
    </div>
    </div>
    
    </> 
    );
}

export default Master_layout;