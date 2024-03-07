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
  const[Prodprice,setProdprice]=useState(0);
  const[prodname,setprodname]=useState('');
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
       setPrice(price=>[...price,data.product_price])
     })
    //  console.log(price);
    //  let minValue = Math.min(...price);
    //  let maxValue = Math.max(...price);
    //  setProdpricerange({maxprice:maxValue,minprice:minValue});
    //  console.log(minValue,maxValue)
    //  console.log(Prodpricerange)
   }
   const priceRange=()=>{
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
    
    
   },[product]);

   useEffect(()=>{
    Product_price();
   },[mobile]);
  
   useEffect(()=>{
    console.log(price);
    priceRange()
   },[price])
   
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
    if(filterTags.includes(mob.Brand_name) && Prodprice==0 && prodname=='')
    {
      return mob;
    }
    else if(filterTags.length<=0 &&Prodprice>0 && prodname=='')
    {
       if(mob.product_price<Prodprice)
       {console.log('price sorted')
       console.log(mob)
        return mob;
       }
    }
    else if(filterTags.includes(mob.Brand_name) && mob.product_price<Prodprice && prodname=='')
    {
        return mob;
    }
    else if(prodname!='')
    {
      if(mob.product_name==prodname)
      {
        return mob;
      }
    }
   })

   const handlePrice=(event)=>{
    setProdprice(event.target.value);
    console.log(Prodprice);


   }
   const nameHandler=(event)=>{
    console.log(event.target.value)
    setprodname(event.target.value)
    console.log(prodname);
   }
  
    return (
    <div className="container-fluid">
      <div className="row">
        <PhoneFilter mobile={mobile} handleFilter={handleFilter} handlePrice={handlePrice} Prodprice={Prodprice} Prodpricerange={Prodpricerange} nameHandler={nameHandler} />
        <PhoneFilterOrNot mobile={mobile} filteredDATA={filteredDATA} filterTags={filterTags} Prodprice={Prodprice}  prodname={prodname} />
        
      </div>
    </div>
  );

  
}

export default Product_list;
