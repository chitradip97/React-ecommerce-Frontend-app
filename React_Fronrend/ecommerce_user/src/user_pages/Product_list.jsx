import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import PhoneFilter from "../user_components/product_com/Mobile/PhoneFilter";
import PhoneFilterOrNot from "../user_components/product_com/Mobile/PhoneFilterOrNot";

function Product_list() {
    const [product, setProduct] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const[price,setPrice]=useState([]);
  const[maxprice,setMaxPrice]=useState();
  async function getAllproduct() {
    try {
      const products_all = await axios.get(
        "http://127.0.0.1:1234/api/products"
      )
      console.log(products_all.data);
      setProduct(products_all.data);
      getAllMobile();
      
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

  useEffect(() => {
    getAllproduct();
    console.log('useEffect called');
  },[product] );

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

   const handlePrice=()=>{
    mobile.forEach((data)=>{setPrice([...price,data.product_price
    ])})
    setMaxPrice(Math.max(price));

   }
  
    return (
    <div className="container-fluid">
      <div className="row">
        <PhoneFilter handleFilter={handleFilter} handlePrice={handlePrice} maxprice={maxprice}/>
        <PhoneFilterOrNot mobile={mobile} filteredDATA={filteredDATA} filterTags={filterTags} />
        
      </div>
    </div>
  );

  
}

export default Product_list;
