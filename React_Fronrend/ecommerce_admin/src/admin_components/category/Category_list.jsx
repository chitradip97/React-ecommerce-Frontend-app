import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Category_list(props) {
    const [category, setCategory] = useState([]);
    async function getAllcategory() {
      try {
        const category_all = await axios.get(
          "http://127.0.0.1:1234/api/category"
        );
        console.log(category_all.data);
        setCategory(category_all.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      
      getAllcategory();
    }, []);
  
    const handleDelete=(id)=>{
      
      axios.delete(`http://127.0.0.1:1234/api/category/${id}`).then(()=>{getAllcategory()})
     }
     const setToLocalstorage=(id,name,stock)=>{
      localStorage.setItem('id',id);
      localStorage.setItem('name',name);
      localStorage.setItem('stock',stock);
      props.setcatposition(false);
   }
  
  
      return ( 
          <>
              <div className="container-fluid">
                  
                  <div className="row">
                      <div className="col-xl-12 col-md-12">
                          <div className="card  ">
                              <div className="card-footer"> <h5 className="basic_font">Category List :</h5> </div>
                                  <div className="card-body ">
                                      <div className='table-responsive-sm'>
                                                  
                                          <table className="table table-striped prod_table" id="datatablesSimple">
                                          <thead>
                                          <tr>
                                              <th>ID</th>
                                              <th>NAME</th>
                                              <th>Stock</th>
                                              <th>Action</th>
                                          </tr>
                                          </thead>
                                          <tbody>
  
                                          {category.map((cat, i) => {
                                              return (
                                              <tr key={i}>
                                                  <td>{cat.id}</td>
                                                  <td>{cat.category_name}</td>
                                                  <td>{cat.category_stock}</td>
                                                  <td><button class="btn btn-success"
                                                    onClick={()=>{setToLocalstorage(cat.id,cat.category_name,cat.category_stock)}}
                                                   >Edit</button>
                                                  <button class="btn btn-danger"
                                                   onClick={()=>{handleDelete(cat.id)}}
                                                  >Delete</button></td>
                                              </tr>
                                              
                                              );
                                          })}
  
                                      
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

export default Category_list;