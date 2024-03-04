import React from 'react'

function PhoneFilter(props) {
    return ( 
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
                      value="Samsung"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="electronicsCheckbox">
                    Samsung
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="clothingCheckbox"
                      value="Redmi"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="clothingCheckbox">
                    Redmi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="booksCheckbox"
                      value="Realme"
                      onChange={props.handleFilter}
                    />
                    <label className="form-check-label" for="booksCheckbox">
                    Realme
                    </label>
                  </div>
                  {/* <!-- Add more categories as needed --> */}
                </div>
    
                {/* <!-- Price Range Filter --> */}
                <div className="mb-3">
                  <label for="priceRange" className="form-label">
                    Price Range:
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="priceRange"
                    min="0"
                    max={props.maxprice}
                    step="50"
                    onChange={props.handlePrice}
                  />
                </div>
    
                {/* <!-- Add more filters as needed --> */}
    
                <button type="button" className="btn btn-primary" >
                  Apply Filters
                </button>
                <button type="button" className="btn btn-secondary">
                  Reset Filters
                </button>
              </div>
        </>
     );
}

export default PhoneFilter;