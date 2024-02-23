import React from "react";

function Registration() {
  return (
    // <div className="container">
    //   <form>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="Name"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="Email" className="form-label">
    //         Email
    //       </label>
    //       <input
    //         type="Email"
    //         className="form-control"
    //         id="Email"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="Email" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="Password"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="Auth" className="form-label">
    //         Authorization
    //       </label>
    //       <input type="radio" className="form-control" name="Auth" value="User" id="Password"/>User
    //       <input type="radio" className="form-control" name="Auth" value="Admin" id="Password"/>Admin
    //     </div>

    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    // <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
    //   <div className="container py-5 h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col col-xl-10">
    //         <div className="card" style={{ borderRadius: "1rem" }}>
    //           <div className="row g-0">
    //             <div className="col-md-6 col-lg-5 d-none d-md-block">
    //               <img
    //                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
    //                 alt="login form"
    //                 className="img-fluid"
    //                 style={{ borderRadius: "1rem 0 0 1rem" }}
    //               />
    //             </div>
    //             <div className="col-md-6 col-lg-7 d-flex align-items-center">
    //               <div className="card-body p-4 p-lg-5 text-black">
    //                 <form>
    //                   <div className="d-flex align-items-center mb-3 pb-1">
    //                     <i
    //                       className="fas fa-cubes fa-2x me-3"
    //                       style={{ color: "#ff6219" }}
    //                     />
    //                     <span className="h1 fw-bold mb-0">Logo</span>
    //                   </div>
    //                   <h5
    //                     className="fw-normal mb-3 pb-3"
    //                     style={{ letterSpacing: 1 }}
    //                   >
    //                     Sign into your account
    //                   </h5>
    //                   <div className="form-outline mb-4">
    //                     <input
    //                       type="email"
    //                       id="form2Example17"
    //                       className="form-control form-control-lg"
    //                     />
    //                     <label className="form-label" htmlFor="form2Example17">
    //                       Email address
    //                     </label>
    //                   </div>
    //                   <div className="form-outline mb-4">
    //                     <input
    //                       type="password"
    //                       id="form2Example27"
    //                       className="form-control form-control-lg"
    //                     />
    //                     <label className="form-label" htmlFor="form2Example27">
    //                       Password
    //                     </label>
    //                   </div>
    //                   <div className="pt-1 mb-4">
    //                     <button
    //                       className="btn btn-dark btn-lg btn-block"
    //                       type="button"
    //                     >
    //                       Login
    //                     </button>
    //                   </div>
    //                   <a className="small text-muted" href="#!">
    //                     Forgot password?
    //                   </a>
    //                   <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
    //                     Don't have an account?{" "}
    //                     <a href="#!" style={{ color: "#393f81" }}>
    //                       Register here
    //                     </a>
    //                   </p>
    //                   <a href="#!" className="small text-muted">
    //                     Terms of use.
    //                   </a>
    //                   <a href="#!" className="small text-muted">
    //                     Privacy policy
    //                   </a>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
                          />
                          <label className="form-label" htmlFor="form3Example1">
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
                          />
                          <label className="form-label" htmlFor="form3Example2">
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
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>
                    {/* Authorization */}

                    <div className=" mb-4">
                    <div class="form-check d-flex justify-content-center mb-1">
                        <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            User
                        </label>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-1">
                        <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Admin
                        </label>
                    </div>
                    <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Register As
                    </label>
                    </div>
                    {/* Checkbox */}
                    {/* <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example33"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div> */}
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Register
                    </button>
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
  );
}

export default Registration;
