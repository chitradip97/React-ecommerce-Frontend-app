import React, { useEffect } from "react";
import { useState } from "react";
function Dashboard() { const login=localStorage.getItem('login');
const[loginenable,setLoginenable]=useState('');
useEffect(()=>{
setLoginenable(login)
},[loginenable])
console.log(login)
  if(login)
  {
    return (
      <>
        {/* <h1 >
          This is Dashboard
        </h1> */}
        <div className="container-fluid px-4">
          <h1 className="mt-0">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card bg-primary text-white mb-4">
                <div className="card-body">Total no of Customer</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    3
                  </a>
                  {/* <div className="small text-white">
                    <i className="fas fa-angle-right" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-warning text-white mb-4">
                <div className="card-body">Total no of Product</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                    21
                  </a>
                  {/* <div className="small text-white">
                    <i className="fas fa-angle-right" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-success text-white mb-4">
                <div className="card-body">Todays Sale</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                   Rs. 1156
                  </a>
                  {/* <div className="small text-white">
                    <i className="fas fa-angle-right" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-danger text-white mb-4">
                <div className="card-body">Total Sale</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a className="small text-white stretched-link" href="#">
                   Rs. 207365
                  </a>
                  {/* <div className="small text-white">
                    <i className="fas fa-angle-right" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-area me-1" />
                  Area Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myAreaChart" width="100%" height={40} />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1" />
                  Bar Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myBarChart" width="100%" height={40} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </>
    );
  }
  else{
    return(
      <>
        <div className="container mx-4 mt-2 ">
          <div className="row">
          <div class="alert alert-danger">
            <strong>Permission denied!</strong> Please Login first.
          </div>

          </div>
        {/* <h1>Please Login first</h1> */}
        </div>
      </>

    )
    
  }
  
}

export default Dashboard;
