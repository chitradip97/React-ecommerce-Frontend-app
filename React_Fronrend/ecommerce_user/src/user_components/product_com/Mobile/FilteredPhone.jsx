import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function FilteredPhone(props) {
  
    return (
        <>
          
              
              <div className="col-md-9 ">
                <div className="container px-4 px-lg-5 mt-5">
                  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {props.filteredDATA.map((val, index) => {
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
                             Cart
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
                  {console.log(props.filteredDATA)}
                    
                  </div>
                </div>
              </div>
           
        </>
      );
}

export default FilteredPhone;