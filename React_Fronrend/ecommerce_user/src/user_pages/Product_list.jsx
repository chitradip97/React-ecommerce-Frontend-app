import React from "react";
import { useState,useEffect,useContext } from "react";
import axios from "axios";
import PhoneFilter from "../user_components/product_com/Mobile/PhoneFilter";
import PhoneFilterOrNot from "../user_components/product_com/Mobile/PhoneFilterOrNot";
// import { productdata } from "../App";

function Product_list() {
  // const product=useContext(productdata)
  // console.log(product)
    const [product, setProduct] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
   const[price,setPrice]=useState([]);
   const[Prodpricerange,setProdpricerange]=useState({maxprice:'',minprice:''});
  const[Prodprice,setProdprice]=useState();
   async function getAllproduct() {
   try {
       const products_all = await axios.get(
         "http://127.0.0.1:1234/api/products"
       )
       console.log(products_all.data);
       setProduct(products_all.data);
      //  getAllMobile();
      
     } catch (error) {
       console.log(error);
     }
   }
  const getAllMobile = () => {
    const Mobiles = product.filter(
      (val, index) => val.category_name == "Mobile"
    );
    setMobile(Mobiles);
    console.log(Mobiles);
    
  };
//   useEffect(()=>{

// // setProduct(productdata);
//   },[])

   const Product_price=()=>{
     mobile.map((data)=>{
        console.log(data.product_price)
       setPrice([...price,data.product_price])
     })
     console.log(price);
     let minValue = Math.min(...price);
     let maxValue = Math.max(...price);
     setProdpricerange({maxprice:maxValue,minprice:minValue});
     console.log(minValue,maxValue)
     console.log(Prodpricerange)
   }

   useEffect(() => {
     getAllproduct();
     console.log('useEffect called');
     // Product_price();
   },[] );
   useEffect(()=>{
    getAllMobile();
    Product_price();
    console.log(price);
   },[product,price])
   
  const handleFilter=(event)=>{
    if(event.target.checked)
    {
      setFilterTags([...filterTags,event.target.value])
    }else{
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      )
    }
    console.log(filterTags)
  }

   const filteredDATA = mobile.filter((mob)=>{
    if(filterTags.includes(mob.Brand_name))
    {
      return mob;
    }
   })

   const handlePrice=(event)=>{
    setProdprice(event.target.value);
    console.log(Prodprice)

   }
  
    return (
    <div className="container-fluid">
      <div className="row">
        <PhoneFilter mobile={mobile} handleFilter={handleFilter} handlePrice={handlePrice} Prodprice={Prodprice} Prodpricerange={Prodpricerange}/>
        <PhoneFilterOrNot mobile={mobile} filteredDATA={filteredDATA} filterTags={filterTags} />
        
      </div>
    </div>
  );

  
}

export default Product_list;
