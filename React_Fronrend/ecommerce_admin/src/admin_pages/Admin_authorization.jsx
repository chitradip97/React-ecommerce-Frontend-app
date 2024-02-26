import React from 'react'
import Admin_register from '../admin_components/Authorization/Admin_register';
import Admin_login from '../admin_components/Authorization/Admin_login';
import { Outlet } from 'react-router-dom';
function Admin_authorization() {

    return ( 
        <>
        {/* <Admin_login/>
        <Admin_register/> */}
        <Outlet/>
        </>
     );
}

export default Admin_authorization;