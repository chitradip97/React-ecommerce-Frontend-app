import React from "react";
import '../user_assets/user_prod_des/css/Product.css';
import { Link, useParams } from "react-router-dom";
import { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import DetailsThumb from "../user_components/product_details/DetailsThumb";

function Product_desc() {
  const {pid}=useParams();
  const myRef=useRef();
  console.log('product-id:',pid);
  const [product, setProduct] = useState([]);
  const [prouctimg,setProductimg]=useState([]);
  const [prodImgAll,setProdImgAll]=useState([]);
  const [index,setIndex]=useState(0);
    async function getproduct() {
      try {
        const products_desc = await axios.get(
          `http://127.0.0.1:1234/api/products/${pid}`
        );
         console.log(products_desc.data);
        //  console.log(products_desc.data.result);
        //  console.log(products_desc.data.result2);
        setProduct(products_desc.data.result);
        setProductimg(products_desc.data.result2);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      
        getproduct();
        // console.log(product)
    }, []);
    const imgHanndle=()=>{
      product.map(val=>setProdImgAll((prevState)=>([...prevState,val.product_image])));
      prouctimg.map(val=>{
        // console.log(val)
         setProdImgAll((prevState)=>([...prevState,val.Image_path]))
      })
    }

  useEffect(()=>{
    console.log(product)
    console.log(prouctimg)
    imgHanndle()
    // setProdImgAll([...prodImgAll,product.product_image]);
  },[product,prouctimg])
   useEffect(()=>{
     console.log(prodImgAll)
     if(prodImgAll.length>0)
     {
      const ind = index;
      myRef.current.children[ind].className = "active";
     }
      
   },[prodImgAll])
   

   const handleTab = (ind )=>{
    setIndex(ind)
     const images = myRef.current.children;
     console.log(images)
     for(let i=0; i<images.length; i++){
       images[i].className = images[i].className.replace("active", "");
     }
     images[ind].className = "active";
  };
if (prodImgAll.length>0)
{
  return (
    <>
    

<div className="app">
        {
          // prodImgAll.map(item =>(
            <div className="details">
              <div className="big-img">
                <img src={"http://127.0.0.1:1234/"+prodImgAll[index]} alt=""/>
              </div>
              {/* {console.log(item)} */}

              <div className="box">
                <div className="row">
                  <h2>{product[0].product_name}</h2>
                  <span>Rs.{product[0].product_price}</span>
                </div>
                {/* <Color colors={item.colors} /> */}

                <p>{product[0].product_desc}</p>
                {/* <p>{item.content}</p> */}
                
                <DetailsThumb images={prodImgAll} tab={handleTab} myRef={myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          // ))
        }
      </div>

    </>
  );
}
  
}

export default Product_desc;
