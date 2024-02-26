import React from "react";
import { NavLink } from 'react-router-dom';
import { useRef,useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Admin_login() {
  // const nmref=useRef('');
  // const numref=useRef('');
  // const emref=useRef('');
  // const passref=useRef('');
  const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  
  const submitReg=(e)=>{
    e.preventDefault();
   
        axios.post("http://127.0.0.1:1234/api/register",{Name:name,Number:number,Email:email,Password:password})
           .then((Response)=>{
               console.log(Response.data);
               setName(" ");
               setNumber(" ");
               setEmail(" ");
               setPassword(" ");
               toast.success("Insert Successfully!",{
                position: "top-center",
               });
           })  
   }
  return (
    <>
      <div className="container">
        {/* Section: Design Block */}
        <section className="text-center text-lg-start">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  ",
            }}
          />
          {/* Jumbotron */}
          <div className="container py-4">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div
                  className="card cascading-right"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div className="card-body p-5 shadow-5 text-center">
                    <h2 className="fw-bold mb-5">Create Account</h2>
                    <form>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                              // ref={nmref}
                              onChange={(e)=>{setName(e.target.value)}}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example2"
                              className="form-control"
                              // ref={numref}
                              onChange={(e)=>{setNumber(e.target.value)}}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              Mobile Number
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          // ref={emref}
                          onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          // ref={passref}
                          onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                      </div>
                     
                      {/* Submit button */}
                      <button
                        type="button"
                        className="btn btn-primary btn-block mb-4"
                        onClick={submitReg}
                      >
                        Register
                      </button>
                      {/* <NavLink to={'/'}>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4  float-end"
                    >
                      Log In
                    </button>
                    </NavLink> */}
                      {/* Register buttons */}
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  className="w-100 rounded-4 shadow-4"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </div>
      <ToastContainer />
    </>
  );
}

export default Admin_login;
