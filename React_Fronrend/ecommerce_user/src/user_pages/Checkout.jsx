import React from "react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Cartcontext } from "../Context";
function Checkout() {
  const { cart, summery } = useContext(Cartcontext);
  const { checkoutdetails, setCheckoutdetails } = useContext(Cartcontext);
  const { paymentdetails, setPaymentdetails } = useContext(Cartcontext);
  console.log(cart);
  console.log(summery);
  return (
    <>
      {/* <h1>checkout</h1> */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-4">
              {/* <div className="card mb-4 border shadow-0">
                <div className="p-4 d-flex justify-content-between">
                  <div className="">
                    <h5>Have an account?</h5>
                    <p className="mb-0 text-wrap ">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                    <a href="#" className="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100">Register</a>
                    <a href="#" className="btn btn-primary shadow-0 text-nowrap w-100">Sign in</a>
                  </div>
                </div>
              </div> */}

              {/* <!-- Checkout --> */}
              <div className="card shadow-0 border">
                <div className="p-4">
                  <h5 className="card-title mb-3">Guest checkout</h5>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <p className="mb-0">First name</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              Fname: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <p className="mb-0">Last name</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              Lname: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6 mb-3">
                      <p className="mb-0">Phone</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typePhone"
                          // value="+91 "
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              Phone: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6 mb-3">
                      <p className="mb-0">Email</p>
                      <div className="form-outline">
                        <input
                          type="email"
                          id="typeEmail"
                          placeholder="example@gmail.com"
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              Email: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Keep me up to date on news</label>
                  </div> */}

                  <hr className="my-4" />

                  <h5 className="card-title mb-3">Shipping info</h5>

                  <div className="row mb-3">
                    <div className="col-lg-4 mb-3">
                      {/* <!-- Default checked radio --> */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Express delivery <br />
                            <small className="text-muted">
                              3-4 days via Fedex{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      {/* <!-- Default radio --> */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Post office <br />
                            <small className="text-muted">
                              20-30 days via post{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      {/* <!-- Default radio --> */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault3"
                          >
                            Self pick-up <br />
                            <small className="text-muted">
                              Come to our shop{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-8 mb-3">
                      <p className="mb-0">Address</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              Adress: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-sm-4 mb-3">
                      <p className="mb-0">City</p>
                      <input
                        type="text"
                        id="typeText"
                        placeholder="Type here"
                        className="form-control"
                        onChange={(e) => {
                          setCheckoutdetails({
                            ...checkoutdetails,
                            City: e.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="col-sm-4 mb-3">
                      <p className="mb-0">House No.</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              House: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-sm-4 col-6 mb-3">
                      <p className="mb-0">Postal code</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              Pin: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-sm-4 col-6 mb-3">
                      <p className="mb-0">District</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control"
                          onChange={(e) => {
                            setCheckoutdetails({
                              ...checkoutdetails,
                              Dist: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault1"
                    />
                    <label className="form-check-label" for="flexCheckDefault1">
                      Save this address
                    </label>
                  </div>

                  <div className="mb-3">
                    <p className="mb-0">Message to seller</p>
                    <div className="form-outline">
                      <textarea
                        className="form-control"
                        id="textAreaExample1"
                        rows="2"
                        onChange={(e) => {
                          setCheckoutdetails({
                            ...checkoutdetails,
                            Message: e.target.value,
                          });
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <hr class="my-4" />

                  <h4 class="mb-3">Payment</h4>

                  <div class="my-3">
                    <div class="form-check">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        class="form-check-input"
                        value='Credit card'
                        onChange={(e) => {
                          setPaymentdetails({
                            ...paymentdetails,
                            Card: e.target.value,
                          });
                        }}
                        checked
                        required
                      />
                      <label class="form-check-label" for="credit">
                        Credit card
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        class="form-check-input"
                        value='Credit card'
                        onChange={(e) => {
                          setPaymentdetails({
                            ...paymentdetails,
                            Card: e.target.value,
                          });
                        }}
                        required
                      />
                      <label class="form-check-label" for="debit">
                        Debit card
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        class="form-check-input"
                        value='Credit card'
                        onChange={(e) => {
                          setPaymentdetails({
                            ...paymentdetails,
                            Card: e.target.value,
                          });
                        }}
                        required
                      />
                      <label class="form-check-label" for="paypal">
                        PayPal
                      </label>
                    </div>
                  </div>

                  <div class="row gy-3">
                    <div class="col-md-6">
                      <label for="cc-name" class="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                        onChange={(e) => {
                          setPaymentdetails({
                            ...paymentdetails,
                            Cardname: e.target.value,
                          });
                        }}
                        required
                      />
                      <small class="text-muted">
                        Full name as displayed on card
                      </small>
                      <div class="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="cc-number" class="form-label">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-number"
                        placeholder=""
                        onChange={(e) => {
                          setPaymentdetails({
                            ...paymentdetails,
                            Cardnumber: e.target.value,
                          });
                        }}
                        required
                      />
                      <div class="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>

                    <div class="col-md-3">
                      <label for="cc-expiration" class="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-expiration"
                        placeholder=""
                        onChange={(e) => {
                          setPaymentdetails({
                            ...paymentdetails,
                            Expairy: e.target.value,
                          });
                        }}
                        required
                      />
                      <div class="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>

                    <div class="col-md-3">
                      <label for="cc-cvv" class="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-cvv"
                        placeholder=""
                        onChange={(e) => {
                          setPaymentdetails({
                            ...paymentdetails,
                            Cvv: e.target.value,
                          });
                        }}
                        required
                      />
                      <div class="invalid-feedback">Security code required</div>
                    </div>
                  </div>

                  <div className="float-end">
                    {/* <button className="btn btn-light border">Cancel</button> */}
                    <NavLink to='Payment'>
                    <button className="btn btn-primary shadow-0 border">
                      Proceed to Pay
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* <!-- Checkout --> */}
            </div>
            <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div
                className="ms-lg-4 mt-4 mt-lg-0"
                style={{ maxWidth: "320px" }}
              >
                <h6 className="mb-3">Summary</h6>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">Rs.{summery.subtotal}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-danger">- Rs.00.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">+ Rs.{summery.shipping}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">Rs.{summery.grandtotal}</p>
                </div>

                <div className="input-group mt-3 mb-4">
                  <input
                    type="text"
                    className="form-control border"
                    name=""
                    placeholder="Promo code"
                  />
                  <button className="btn btn-light text-primary border">
                    Apply
                  </button>
                </div>

                <hr />
                <h6 className="text-dark my-4">Items in cart</h6>
                {cart.map((val) => {
                  return (
                    <>
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3 position-relative">
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                            1
                          </span>
                          <img
                            src={"http://127.0.0.1:1234/" + val.pimg}
                            style={{ height: "96px", width: "96x" }}
                            className="img-sm rounded border"
                          />
                        </div>
                        <div className="">
                          <a href="#" className="nav-link">
                            {val.pnm} <br />
                            {val.pcat}
                          </a>
                          <div className="price text-muted">
                            {val.pqnty} Pc.
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                {/* <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      1
                    </span>
                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" style={{height: '96px', width: '96x'}} className="img-sm rounded border" />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">
                      Gaming Headset with Mic <br />
                      Darkblue color
                    </a>
                    <div className="price text-muted">Total: $295.99</div>
                  </div>
                </div> */}

                {/* <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      1
                    </span>
                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" style={{height: '96px', width: '96x'}} className="img-sm rounded border" />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">
                      Apple Watch Series 4 Space <br />
                      Large size
                    </a>
                    <div className="price text-muted">Total: $217.99</div>
                  </div>
                </div>
      
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      3
                    </span>
                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp" style={{height: '96px', width: '96x'}} className="img-sm rounded border" />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">GoPro HERO6 4K Action Camera - Black</a>
                    <div className="price text-muted">Total: $910.00</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
