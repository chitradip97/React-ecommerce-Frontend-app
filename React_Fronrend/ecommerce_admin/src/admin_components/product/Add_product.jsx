import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add_product() {
    const [prodName,setProdname]=useState("");
    const [proddesc,setProddesc]=useState("");
    const [prodprice,setProdprice]=useState("");
    const [prodqnty,setProdqnty]=useState("");
    const [categorylist, setCategorylist] = useState([]);
    const [category, setCategory] = useState('');
    const [prodimg, setProdimg] = useState('');
    const [img,setImg]=useState('');


    async function getAllcategory() {
        try {
          const category_all = await axios.get(
            "http://127.0.0.1:1234/api/category"
          );
          console.log(category_all.data);
          setCategorylist(category_all.data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        
        getAllcategory();
      }, []);


      const imghandlechange=(e)=>{
        const imagesArray = [];
        for (let i = 0; i < e.target.files.length; i++) {
            imagesArray.push(e.target.files[i]);
          }
          setImg(imagesArray);
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData();
         data.append('category',category);
         data.append('prodName',prodName);
         data.append('proddesc',proddesc);
         data.append('prodprice',prodprice);
         data.append('prodqnty',prodqnty);
        //  data.append('prodimg',prodimg);
        for (let i = 0; i < img.length; i++) {
            data.append("images[]", img[i]);
          }
        // const config = {     
        //     headers: { 'content-type': 'multipart/form-data' }
        // }
    //     console.log(data);
    //         axios.post("http://127.0.0.1:1234/api/products",
    //         {category:category,prodName:prodName,proddesc:proddesc,prodprice:prodprice,prodqnty:prodqnty,data}
    //         ,config)
    //            .then((Response)=>{
    //                console.log(Response.data);
                   
    //            }).catch(error => {
    //             console.log(error);
    //         });  
    //    }
       console.log(data);
       axios.post("http://127.0.0.1:1234/api/products",data,{})
          .then((Response)=>{
              console.log(Response.data);
              toast.success("Insert Successfully!",{
                position: "top-center",
               });
              
          }).catch(error => {
           console.log(error);
       });  
  }
    return ( 
        <>
        {/* <h1>This is add product</h1> */}
        <div className="container-fluid">
                
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                    <div className="card  mb-4 ">
                        <div className="card-footer"> 
                        <span id="alert_contain"></span>    
                        <h5 className="basic_font">Add Product</h5> 
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}  >
                                <div className="mb-3 mt-1 col-xl-12">
                                <label for="product_category" className="form-label basic_font">Category :</label>
                                
                                <select className="form-control cat_nm" name="prod_category" id="product_category" onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value="">--select--</option>
                                    {
                                        categorylist.map((val)=>{
                                            return <option value={val.category_name}>{val.category_name}</option>
                                        })
                                    }
                                
                               
                                </select>
                                </div>
                                <div className="mb-3 mt-1">
                                <label for="product_name" className="form-label basic_font">Product :</label>
                                <input type="text" className="form-control prod_nm" name="prod_nm" id="product_name" placeholder="Enter your Product name" onChange={(e)=>{setProdname(e.target.value)}}/>
                                </div>
                               
                                <div className="mb-3 mt-1">
                                <label for="product_dec" className="form-label basic_font ">Category Description :</label>
                                <textarea className="form-control prod_dec" placeholder="Enter your Product Descrption" rows="3" id="product_dec" name="description" onChange={(e)=>{setProddesc(e.target.value)}}></textarea>
                                </div>
                                <div className="row mb-3 mt-1"  >
                                    <div className="col-xl-6 col-md-12">
                                        <label for="product_price" className="form-label basic_font ">Price :</label>
                                        <input type="number" className="form-control prod_price" name="prod_price" id="product_price" onChange={(e)=>{setProdprice(e.target.value)}}/>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <label for="product_quantity" className="form-label basic_font ">Quantity :</label>
                                        <input type="number" className="form-control prod_qnty" name="prod_quantity" id="product_quantity" onChange={(e)=>{setProdqnty(e.target.value)}}/>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <label for="prod_img" className="form-label basic_font ">Product image :</label>
                                        <input type="file" className="form-control prod_img" name="prod_img" id="prod_img" multiple onChange={imghandlechange}/>
                                    </div>
                                    
                                </div>
                                <input type="submit" className="btn btn-primary" id="prod" name="Product_add_btn" value="ADD" />
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <ToastContainer />
        </>
     );
}

export default Add_product;