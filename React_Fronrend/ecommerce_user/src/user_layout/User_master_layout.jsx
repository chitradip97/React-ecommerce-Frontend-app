import React from 'react';
import { Outlet } from 'react-router-dom';

// user style & js
import '../user_assets/user_home/css/user_home_styles.css';
import '../user_assets/user_home/js/user_home_scripts';



// layouts
import Navber_User from './Navber_User';

import Footer_User from './Footer_User';


function User_master_layout() {
    return ( 
    <>
    <Navber_User/>
    <Outlet/>
    <Footer_User/>
    
    </>
    
    );
}

export default User_master_layout;