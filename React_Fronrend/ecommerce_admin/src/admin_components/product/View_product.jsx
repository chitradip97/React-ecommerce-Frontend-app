import React from 'react'
import Product_list from './Product_list';
import Product_edit from './Product_edit';
import { useState } from 'react';
function View_product() {
    // return ( 
    //     <>
    //     {/* <h1>This is view product</h1> */}
    //     <div className="container-fluid">
                
    //             <div className="row">
    //                 <div className="col-xl-12 col-md-12">
    //                     <div className="card  ">
    //                         <div className="card-footer"> <h5 className="basic_font">Product List :</h5> </div>
    //                             <div className="card-body ">
    //                                 <div className='table-responsive-sm'>
                                                
    //                                     <table className="table table-striped prod_table" id="datatablesSimple">
    //                                     <thead>
    //                                     <tr>
    //                                         <th>Product Id</th>
    //                                         <th>Product NAME</th>
    //                                         <th>Product Category</th>
    //                                         <th>Product Price</th>
    //                                         <th>Product Quantity</th>
    //                                         <th>Action</th>
    //                                     </tr>
    //                                     </thead>
    //                                     <tbody>

                                    

    //                                     <tr>
    //                                         <td>2</td>
    //                                         <td>Sprite</td>
    //                                         <td>Beverage</td>
    //                                         <td>250</td>
    //                                         <td>10</td>
    //                                         <td>
    //                                         <a href="view_product_edit.php"><button type="button" className="btn btn-success">Edit</button></a>
    //                                         <a href="view_product_delete.php"><button type="button" className="btn btn-danger">Delete</button></a>
    //                                         </td>
    //                                     </tr>
    //                                     <tr>
    //                                         <td>3</td>
    //                                         <td>ORS</td>
    //                                         <td>Pharmacy</td>
    //                                         <td>1000</td>
    //                                         <td>15</td>
    //                                         <td>
    //                                         <a href="view_product_edit.php"><button type="button" className="btn btn-success">Edit</button></a>
    //                                         <a href="view_product_delete.php"><button type="button" className="btn btn-danger">Delete</button></a>
    //                                         </td>
    //                                     </tr>
    //                                     <tr>
    //                                         <td>4</td>
    //                                         <td>Amul Curd</td>
    //                                         <td>Dairy</td>
    //                                         <td>750</td>
    //                                         <td>50</td>
    //                                         <td>
    //                                         <a href="view_product_edit.php"><button type="button" className="btn btn-success">Edit</button></a>
    //                                         <a href="view_product_delete.php"><button type="button" className="btn btn-danger">Delete</button></a>
    //                                         </td>
    //                                     </tr> 
                                    
    //                                     </tbody>
    //                                     </table>
    //                                 </div>
                                    
    //                             </div>
    //                         </div>
    //                     </div>
                    
    //                 </div>
    //             </div>    
    //     </>
    //  );

    const [prodposition,setprodposition]=useState(true);
    if(prodposition==true){
        return (
            <Product_list setprodposition={setprodposition}/>
        )
    }
    else{
        return(
            <Product_edit setprodposition={setprodposition}/>
        )
    }
}

export default View_product;