import React, { useEffect,useState } from 'react';

function WatchFilter(props) {
    return ( 
        <>
            <>
            <div className="col-md-3 bg-gray">
                <h5 className="mt-3">Filter Options</h5>
    
                {/* <!-- Category Filters --> */}
                <div className="mb-3">
                  <label for="categoryFilter" className="form-label">
                    Brand:
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="electronicsCheckbox"
                      value="Titan"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="electronicsCheckbox">
                    Titan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="clothingCheckbox"
                      value="Sonata"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="clothingCheckbox">
                    Sonata
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="booksCheckbox"
                      value="Rolex"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="booksCheckbox">
                    Rolex
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="booksCheckbox"
                      value="Timex"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="booksCheckbox">
                    Timex
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="booksCheckbox"
                      value="Boat"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="booksCheckbox">
                    Boat
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="booksCheckbox"
                      value="Noise"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="booksCheckbox">
                    Noise
                    </label>
                  </div>
                  {/* <!-- Add more categories as needed --> */}
                </div>
    
                {/* <!-- Price Range Filter --> */}
                <div className="mb-3">
                  <label for="priceRange" className="form-label">
                    Price Range:{props.Prodprice}
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="priceRange"
                    min={props.Prodpricerange.minprice}
                    max={props.Prodpricerange.maxprice}
                    //  step={1000}
                    value={props.Prodprice}
                    onChange={props.handlePrice}
                  />
                </div>
                <div className="mb-3 ">
                <label for="category_name" className="form-label basic_font">Name search :</label>
                <input type="text" className="form-control cat_nm" name="category_nm" id="category_name" placeholder="Enter your Category name" onChange={props.nameHandler} />
                </div>
    
                {/* <!-- Add more filters as needed --> */}
    
                {/* <button type="button" className="btn btn-primary" >
                  Apply Filters
                </button>
                <button type="button" className="btn btn-secondary">
                  Reset Filters
                </button> */}
              </div>
        </>
        </>
     );
}

export default WatchFilter;