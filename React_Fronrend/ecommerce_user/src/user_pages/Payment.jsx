import React, { useEffect } from 'react'
import { Cartcontext } from '../Context';
import { useState,useContext } from 'react';
import axios from 'axios';
function Payment() {
    const {cart,summery,checkoutdetails,paymentdetails}=useContext(Cartcontext);
    console.log(cart);
    console.log(summery);
    console.log(checkoutdetails);
    console.log(paymentdetails);
    console.log(localStorage.getItem('loginid'))
    let list={
        Customer_id:localStorage.getItem('loginid'),
        shipping_Fname:checkoutdetails.Fname,
        shipping_Lname:checkoutdetails.Lname,
        phone:checkoutdetails.Phone,
        email:checkoutdetails.Email,
        address:checkoutdetails.Adress,
        city:checkoutdetails.City,
        dist:checkoutdetails.Dist,
        house:checkoutdetails.House,
        pin:checkoutdetails.Pin,
        cardname:paymentdetails.Cardname,
        Cardnumber:paymentdetails.Cardnumber,
        Expairy:paymentdetails.Expairy,
        Cvv:paymentdetails.Cvv,
        grandtotal:summery.grandtotal,
        producy:cart
        // product_id:cart.id,
        // product_category:cart.pcat,
        // product_brand:cart.pbrand,
        // product_name:cart.pnm,
        // product_quantity:cart.pqnty,
}
    const handleSubmit=(e)=>{
         e.preventDefault();
       
            axios.post("http://127.0.0.1:1234/api/orders",list)
               .then((Response)=>{
                   console.log(Response.data);
                   
                //    toast.success("Insert Successfully!",{
                //     position: "top-center",
                //    });
               })  
       }
    //    useEffect(()=>{
    //     handleSubmit()
    //    },[]);
    return ( 
        <>
        <h1>Payment page</h1>
        <button onClick={handleSubmit}>add</button>

        </>
     );
}

export default Payment;