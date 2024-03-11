import React from "react";
import "../user_assets/user_cart/cart.css";
import { useState,useContext } from "react";
import { Cartcontext } from "../Context";
import { NavLink } from "react-router-dom";

function Cart() {
  const {cart,setCart}=useContext(Cartcontext);
  var SubTotal=0;
  var shipping=0;
  var grandtotal=0;
  console.log(cart);
  const handleDec=(id)=>{
    
      setCart(cart=>cart.map(val=>val.id==id?{...val,pqnty:val.pqnty-1,ptotal:val.price*(val.pqnty-1)}:val))
    
    
  }

  const handleInc=(id)=>{
    //  cart.map(val=>{
    //    if(val.id==id)
    //    {
    //      // const prevcount=val.pqnty;
    //     return setCart([...val,{pqnty:val.pqnty+1}]);
    //    }
    //    else {
    //      return val;
    //    }
    //  })
     setCart(cart=>cart.map(val=>val.id==id?{...val,pqnty:val.pqnty+1,ptotal:val.price*(val.pqnty+1)}:val))
    
  }

  return (
    <>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">{cart.length} items</h6>
                        </div>
                        <hr className="my-4" />
                        {
                          cart.map((val,index)=>{
                            SubTotal+=val.ptotal;
                           return < >
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={"http://127.0.0.1:1234/"+val.pimg}
                              className="img-fluid rounded-3"
                              alt="image not available"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{val.pcat}</h6>
                            <h6 className="text-black mb-0">{val.pnm}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={()=>{handleDec(val.id)}}
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              value={val.pqnty}
                              type="number"
                              className="form-control form-control-sm"
                              style={{width:'50px'}}
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick={()=>{handleInc(val.id)}}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0 text-muted">Rs.{val.price}</h6>
                            <h6 className="mb-0">Total:</h6>
                            <h6 className="mb-0">Rs.{val.ptotal}</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                                </div>

                                <hr className="my-4" />
                            </>
                          })
                        }

                        

                        {/* <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value="1"
                              type="number"
                              className="form-control form-control-sm"
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value="1"
                              type="number"
                              className="form-control form-control-sm"
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div> */}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="#!" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </a>
                          </h6>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items {cart.length}</h5>
                          {/* <h5>€ 132.00</h5> */}
                        </div>
                        {/* {shipping=(SubTotal*2.5)/100} */}
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Shipping charge</h5>
                          <h5>Rs. {shipping=(SubTotal*2.5)/100}</h5>
                        </div>

                        {/* <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplea2">
                              Enter your code
                            </label>
                          </div>
                        </div> */}

                        <hr className="my-4" />
                          {/* {grandtotal=SubTotal+shipping} */}
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>Rs. {grandtotal=SubTotal+shipping}</h5>
                        </div>
                          <NavLink to={'checkout'}>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                          
                        >
                          Check out
                        </button>
                        </NavLink>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
