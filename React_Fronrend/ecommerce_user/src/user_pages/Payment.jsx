import React, { useEffect } from 'react'
import { Cartcontext } from '../Context';
import { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
function Payment() {
    const {cart,summery,checkoutdetails,paymentdetails,setCart,setSummery,setPaymentdetails,setCheckoutdetails}=useContext(Cartcontext);
    const[shipping_id,setShipping_id]=useState();
    // console.log(cart);
    // console.log(summery);
    // console.log(checkoutdetails);
    // console.log(paymentdetails);
    // console.log(localStorage.getItem('loginid'))
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
        product:cart
        // product_id:cart.id,
        // product_category:cart.pcat,
        // product_brand:cart.pbrand,
        // product_name:cart.pnm,
        // product_quantity:cart.pqnty,
}
    const handleSubmit=()=>{
        //  e.preventDefault();
       
            axios.post("http://127.0.0.1:1234/api/orders",list)
               .then((Response)=>{
                   console.log(Response.data);
                   setShipping_id(Response.data.
                    result2.Shipping_id);
                    setCart([]);
                    setSummery({});
                    setPaymentdetails({Cardname:'',Cardnumber:'',Expairy:'',Cvv:''});
                    setCheckoutdetails({Fname:'',Lname:'',Phone:'',Email:'',Adress:'',City:'',House:'',Pin:'',Dist:'',Message:''});
                //    toast.success("Insert Successfully!",{
                //     position: "top-center",
                //    });
               })  
       }
        useEffect(()=>{
         handleSubmit();
        },[]);
    return ( 
        <>
        {/* <h1>Payment page</h1>
        <button onClick={handleSubmit}>add</button> */}
        <div className="container-fluid">
    <div className="container text-center">
        <h1>Thank you.</h1>
        <p className="lead w-lg-50 mx-auto">Your order has been placed successfully.</p>
        <p className="w-lg-50 mx-auto">Your order number is <a href="#">{shipping_id}</a>. We will immediatelly process your and it will be delivered in 2 - 5 business days.</p>
    </div>
    <div className="container">
        <h2 className="h5 mb-5 text-center"><NavLink to='/'><button className='btn btn-success'>Please Continue with shopping...</button></NavLink></h2>
        {/* <div className="row">
            <div className="col-lg-3">
                <div className="card text-center mb-3">
                    <div className="py-5 px-4">
                        <img src="https://www.bootdey.com/image/280x280/6495ED/000000" alt="" className="img-fluid mb-4" />
                        <h3 className="fs-6 text-truncate"><a href="#" className="stretched-link text-reset">Smartphone 5G Black 12GB RAM+512GB NEW</a></h3>
                        <span className="text-success">$799.00</span> <del className="text-muted">$650.83</del>
                    </div>
                    <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span className="d-block">10%</span>
                        <span className="d-block">OFF</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card text-center position-relative mb-3">
                    <div className="py-5 px-4">
                        <img src="https://www.bootdey.com/image/280x280/FFB6C1/000000" alt="" className="img-fluid mb-4" />
                        <h3 className="fs-6 text-truncate"><a href="#" className="stretched-link text-reset">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</a></h3>
                        <span className="text-success">$250.00</span> <del className="text-muted">$250</del>
                    </div>
                    <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span className="d-block">25%</span>
                        <span className="d-block">OFF</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card text-center mb-3">
                    <div className="py-5 px-4">
                        <img src="https://www.bootdey.com/image/280x280/008B8B/000000" alt="" className="img-fluid mb-4" />
                        <h3 className="fs-6 text-truncate"><a href="#" className="stretched-link text-reset">Smartwatch IP68 Waterproof GPS and Bluetooth Support</a></h3>
                        <span className="text-success">$29.00</span> <del className="text-muted">$14.50</del>
                    </div>
                    <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span className="d-block">50%</span>
                        <span className="d-block">OFF</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card text-center mb-3">
                    <div className="py-5 px-4">
                        <img src="https://www.bootdey.com/image/280x280/00CED1/000000" alt="" className="img-fluid mb-4" />
                        <h3 className="fs-6 text-truncate"><a href="#" className="stretched-link text-reset">Men's Running Shoes</a></h3>
                        <span className="text-success">$110.00</span> <del className="text-muted">$85.23</del>
                    </div>
                    <div className="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span className="d-block">25%</span>
                        <span className="d-block">OFF</span>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
</div>

        </>
     );
}

export default Payment;