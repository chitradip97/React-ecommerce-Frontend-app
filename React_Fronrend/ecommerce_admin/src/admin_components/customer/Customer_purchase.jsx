import React from 'react'

function Customer_purchase() {
    return ( 
        <>
         {/* <h1>This is customer page</h1> */}
        <div class="content_section">
                <div class="container-fluid">
                
                <div class="row">
                    <div class="col-xl-12 col-md-12">
                    <div class="card  ">
                        <div class="card-footer"> <h5 class="basic_font">Customer List :</h5> </div>
                        <div class="card-body ">
                            
                                           
                                <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Customer NAME</th>
                                    <th>Customer Email</th>
                                    <th>Customer Phone</th>
                                    <th>Customer Address</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>

                               



                                 <tr>
                                    <td>1</td>
                                    <td>Shusant Khan</td>
                                    <td>susanta@gmail.com</td>
                                    <td>7925462360</td>
                                    <td>Kolkata</td>
                                    <td>
                                    <a href="view_customer_edit.php"><button type="button" class="btn btn-success">Edit</button></a>
                                    <a href="view_customer_delete.php"><button type="button" class="btn btn-danger">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Rajib Rawat</td>
                                    <td>Rajib@gmail.com</td>
                                    <td>8569354628</td>
                                    <td>Dumdum</td>
                                    <td>
                                    <a href="view_customer_edit.php"><button type="button" class="btn btn-success">Edit</button></a>
                                    <a href="view_customer_delete.php"><button type="button" class="btn btn-danger">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Aman Guha</td>
                                    <td>aman@gmail.com</td>
                                    <td>7965354985</td>
                                    <td>Siliguri</td>
                                    <td>
                                    <a href="view_customer_edit.php"><button type="button" class="btn btn-success">Edit</button></a>
                                    <a href="view_customer_delete.php"><button type="button" class="btn btn-danger">Delete</button></a>
                                    </td>
                                </tr>
                               
                                </tbody>
                                </table>
                            
                            
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>
                
               
           </div>
        </>
     );
}

export default Customer_purchase;