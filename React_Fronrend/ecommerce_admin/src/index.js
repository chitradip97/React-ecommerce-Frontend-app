import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// pages
// import Master_layout from './admin_layout/Master_layout';
import Dashboard from './admin_pages/Dashboard';
import Profile from './admin_pages/Profile';
import Customer from './admin_pages/Customer';
import Product from './admin_pages/Product';
import Category from './admin_pages/Category';
import Brand from './admin_pages/Brand';
import Orders from './admin_pages/Orders';
import Blogs from './admin_pages/Blogs';
import Banner from './admin_pages/Banner';
// Components
import Add_product from './admin_components/product/Add_product';
import View_product from './admin_components/product/View_product';
import Add_category from './admin_components/category/Add_categoty';
import View_category from './admin_components/category/View_category';
import Customer_details from './admin_components/customer/Customer_details';
import Customer_purchase from './admin_components/customer/Customer_purchase';
import Admin_register from './admin_components/Authorization/Admin_register';
import Admin_login from './admin_components/Authorization/Admin_login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      
        <Route path='/'  element={<Dashboard/>}/>
        <Route path='Profile'  element={<Profile/>}/>
        <Route path='Customer'  element={<Customer/>}>
          <Route path='Customer-details'  element={<Customer_details/>}/>
          <Route path='Customer-purchase'  element={<Customer_purchase/>}/>
        </Route>
        <Route path='Product'  element={<Product/>}>
          <Route path='Add-product'  element={<Add_product/>}/>
          <Route path='View-product'  element={<View_product/>}/>
        </Route>
        <Route path='Category'  element={<Category/>}>
          <Route path='Add-category'  element={<Add_category/>}/>
          <Route path='View-category'  element={<View_category/>}/>
        </Route>
        <Route path='Brand'  element={<Brand/>}/>
        <Route path='Orders'  element={<Orders/>}/>
        <Route path='Blogs'  element={<Blogs/>}/>
        <Route path='Banner'  element={<Banner/>}/>
        <Route path='Admin-register'  element={<Admin_register/>}/>
        <Route path='Admin-login'  element={<Admin_login/>}/>
      

    </Route>

  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
