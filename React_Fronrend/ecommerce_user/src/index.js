import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// pages

import User_login from './user_pages/Auth_pages/User_login';
import Registration from './user_pages/Auth_pages/Registration';
import Home from './user_pages/Home'
import Product_list from './user_pages/Product_list';
import Watches_list from './user_pages/Watches_list';
import Product_desc from './user_pages/Product_desc';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        
      <Route index element={<Home/>}/>
      <Route path='Registration' element={<Registration/>}/>
      <Route path='User_login' element={<User_login/>}/>
      <Route path='Product-list' element={<Product_list/>}/>
      <Route path='Watches-list' element={<Watches_list/>}/>
      <Route path='Product-desc/:pid' element={<Product_desc/>}/>
      
      
      

    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
