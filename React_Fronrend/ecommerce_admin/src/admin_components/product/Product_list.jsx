import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Product_list(props) {
    const [product, setProduct] = useState([]);
    async function getAllproduct() {
      try {
        const products_all = await axios.get(
          "http://127.0.0.1:1234/api/products"
        );
        console.log(products_all.data);
        setProduct(products_all.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      
        getAllproduct();
    }, []);
    

    const handleDelete=(id)=>{
      
        axios.delete(`http://127.0.0.1:1234/api/products/${id}`).then(()=>{getAllproduct()})
       }
       const setToLocalstorage=(id,name,price,quantity)=>{
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('price',price);
        localStorage.setItem('quantity',quantity);
        props.setprodposition(false);
     }
    return ( 
        <>
            <>
        {/* <h1>This is view product</h1> */}
        <div className="container-fluid">
                
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                        <div className="card  ">
                            <div className="card-footer"> <h5 className="basic_font">Product List :</h5> </div>
                                <div className="card-body ">
                                    <div className='table-responsive-sm'>
                                                
                                        <table className="table table-striped prod_table" id="datatablesSimple">
                                        <thead>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Product NAME</th>
                                            <th>Product Category</th>
                                            <th>Product Price</th>
                                            <th>Product Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {product.map((prod, i) => {
                                              return (
                                              <tr key={i}>
                                                  <td>{i+1}</td>
                                                  <td>{prod.product_name}</td>
                                                  <td>{prod.category_name}</td>
                                                  <td>{prod.product_price}</td>
                                                  <td>{prod.product_quantity}</td>
                                                  <td><button class="btn btn-success"
                                                    onClick={()=>{setToLocalstorage(prod.id,prod.product_name,prod.product_price,prod.product_quantity)}}
                                                   >Edit</button>
                                                  <button class="btn btn-danger"
                                                   onClick={()=>{handleDelete(prod.id)}}
                                                  >Delete</button></td>
                                              </tr>
                                              
                                              );
                                          })}
  
                                    

                                        {/* <tr>
                                            <td>2</td>
                                            <td>Sprite</td>
                                            <td>Beverage</td>
                                            <td>250</td>
                                            <td>10</td>
                                            <td>
                                            <a href="view_product_edit.php"><button type="button" className="btn btn-success">Edit</button></a>
                                            <a href="view_product_delete.php"><button type="button" className="btn btn-danger">Delete</button></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>ORS</td>
                                            <td>Pharmacy</td>
                                            <td>1000</td>
                                            <td>15</td>
                                            <td>
                                            <a href="view_product_edit.php"><button type="button" className="btn btn-success">Edit</button></a>
                                            <a href="view_product_delete.php"><button type="button" className="btn btn-danger">Delete</button></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Amul Curd</td>
                                            <td>Dairy</td>
                                            <td>750</td>
                                            <td>50</td>
                                            <td>
                                            <a href="view_product_edit.php"><button type="button" className="btn btn-success">Edit</button></a>
                                            <a href="view_product_delete.php"><button type="button" className="btn btn-danger">Delete</button></a>
                                            </td>
                                        </tr>  */}
                                    
                                        </tbody>
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>    
        </>
        </>
     );
}

export default Product_list;