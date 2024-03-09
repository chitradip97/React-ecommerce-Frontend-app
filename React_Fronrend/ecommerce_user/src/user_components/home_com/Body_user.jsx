import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
// import { ApiContent } from "../../services/ApiContent";
import axios from "axios";

function Body_user() {
  const [product, setProduct] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [watches, setWatches] = useState([]);
  async function getAllproduct() {
    try {
      const products_all = await axios.get(
        "http://127.0.0.1:1234/api/products"
      )
      console.log(products_all.data);
      setProduct(products_all.data);
      // getAllMobile();
      // getAllWatches();
    } catch (error) {
      console.log(error);
    }
  }
  const getAllMobile = () => {
    const Mobiles = product.filter(
      (val, index) => val.category_name == "Mobile"
    );
    setMobile(Mobiles);
    console.log(Mobiles);
  };
  const getAllWatches = () => {
    const watches = product.filter(
      (val, index) => val.category_name == "Watches"
    );
    setWatches(watches);
    console.log(watches);
  };
  
  
  useEffect(() => {
    getAllproduct();
    console.log('useEffect called');
  },[] );
  useEffect(()=>{
    getAllMobile();
    getAllWatches();
  },[product])
  return (
    <>
      <>
        {/* {ApiContent.fetchAllProducts()} */}
        {/* Section*/}
        <div class="container mt-3">
        <div class="card">
          <div class="card-header">
            
            <h2 className="float-start">Mobiles</h2>
            <NavLink to='Product-list' className="float-end py-1" ><h4>View More</h4></NavLink>
          </div>
          
        </div>
        </div>
        <section className="py-1">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {mobile.splice(0,8).map((val, index) => {
                return (
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img
                        className="card-img-top"
                        src={ "http://127.0.0.1:1234/" + val.product_image }
                        alt="..."
                      />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">{val.product_name}</h5>
                          {/* Product price*/}
                          Rs.{val.product_price}
                        </div>
                        
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center ">
                          <div className="float-start">
                          <NavLink to='Product-cart' className="btn btn-outline-dark mt-auto" href="#">
                            Add to Cart
                          </NavLink>
                          </div>
                          <div className="float-end">
                          <NavLink to={`Product-desc/${val.id}`}><button type="button" class="btn btn-info">View</button></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              
            {/* <div className="col mb-5">
                <div className="card h-100">
                  
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  
                  <div className="card-body p-4">
                    <div className="text-center">
                      
                      <h5 className="fw-bolder">Special Item</h5>
                      
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                      </div>
                      
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>
                  
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
            </div> */}
             
            </div>
          </div>
        </section>
        <div class="container mt-3">
        <div class="card">
          <div class="card-header">
            <h2 className="float-start">Watches</h2>
            <NavLink to='Watches-list' className="float-end py-1"><h4>View More</h4></NavLink>
            </div>
        </div>
        </div>
        <section className="py-1">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {watches.splice(0,8).map((val, index) => {
                return (
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img
                        className="card-img-top"
                        src={ "http://127.0.0.1:1234/" + val.product_image }
                        alt="..."
                      />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">{val.product_name}</h5>
                          {/* Product price*/}
                          Rs.{val.product_price}
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                        <div className="float-start">
                          <a className="btn btn-outline-dark mt-auto" href="#">
                            Add to Cart
                          </a>
                          </div>
                          <div className="float-end">
                          <NavLink to={`Product-desc/${val.id}`}><button type="button" class="btn btn-info">View</button></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Body_user;
