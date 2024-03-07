import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import WatchFilter from "../user_components/product_com/Watches/WatchFilter";
import WatchFilterOrNot from "../user_components/product_com/Watches/WatchFilterOrNot";

function Watches_list() {
  const [product, setProduct] = useState([]);
  const [watches, setWatches] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const[price,setPrice]=useState([]);
  const[Prodpricerange,setProdpricerange]=useState({maxprice:'',minprice:''});
  const[Prodprice,setProdprice]=useState(0);
  const[prodname,setprodname]=useState('');
  async function getAllproduct() {
    try {
      const products_all = await axios.get(
        "http://127.0.0.1:1234/api/products"
      );
      console.log(products_all.data);
      setProduct(products_all.data);

      getAllWatches();
    } catch (error) {
      console.log(error);
    }
  }
  const getAllWatches = () => {
    const watches = product.filter(
      (val, index) => val.category_name == "Watches"
    );
    setWatches(watches);
    console.log(watches);
  };
  const Product_price=()=>{
    watches.map((data)=>{
       console.log(data.product_price)
      setPrice(price=>[...price,data.product_price])
    })
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
    console.log("useEffect called");
  }, []);
  useEffect(()=>{
    getAllWatches();
    
    
   },[product]);

   useEffect(()=>{
    Product_price();
   },[watches]);
  
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

   const filteredDATA = watches.filter((wtch)=>{
    if(filterTags.includes(wtch.Brand_name) && Prodprice==0 && prodname=='')
    {
      return wtch;
    }
    else if(filterTags.length<=0 &&Prodprice>0 && prodname=='')
    {
       if(wtch.product_price<Prodprice)
       {console.log('price sorted')
       console.log(wtch)
        return wtch;
       }
    }
    else if(filterTags.includes(wtch.Brand_name) && wtch.product_price<Prodprice && prodname=='')
    {
        return wtch;
    }
    else if(prodname!='')
    {
      if(wtch.product_name==prodname)
      {
        return wtch;
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
    // <>
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-md-3 bg-gray">
    //         <h5 className="mt-3">Filter Options</h5>

    //         {/* <!-- Category Filters --> */}
    //         <div className="mb-3">
    //           <label for="categoryFilter" className="form-label">
    //             Category:
    //           </label>
    //           <div className="form-check">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="electronicsCheckbox"
    //               value="electronics"
    //             />
    //             <label className="form-check-label" for="electronicsCheckbox">
    //               Electronics
    //             </label>
    //           </div>
    //           <div className="form-check">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="clothingCheckbox"
    //               value="clothing"
    //             />
    //             <label className="form-check-label" for="clothingCheckbox">
    //               Clothing
    //             </label>
    //           </div>
    //           <div className="form-check">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="booksCheckbox"
    //               value="books"
    //             />
    //             <label className="form-check-label" for="booksCheckbox">
    //               Books
    //             </label>
    //           </div>
    //           {/* <!-- Add more categories as needed --> */}
    //         </div>

    //         {/* <!-- Price Range Filter --> */}
    //         <div className="mb-3">
    //           <label for="priceRange" className="form-label">
    //             Price Range:
    //           </label>
    //           <input
    //             type="range"
    //             className="form-range"
    //             id="priceRange"
    //             min="0"
    //             max="1000"
    //             step="50"
    //           />
    //         </div>

    //         {/* <!-- Add more filters as needed --> */}

    //         <button type="button" className="btn btn-primary">
    //           Apply Filters
    //         </button>
    //         <button type="button" className="btn btn-secondary">
    //           Reset Filters
    //         </button>
    //       </div>
    //       <div className="col-md-9 ">
    //         <div className="container px-4 px-lg-5 mt-5">
    //           <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    //             {watches.map((val, index) => {
    //               return (
    //                 <div className="col mb-5">
    //                   <div className="card h-100">
    //                     {/* Product image*/}
    //                     <img
    //                       className="card-img-top"
    //                       src={"http://127.0.0.1:1234/" + val.product_image}
    //                       alt="..."
    //                     />
    //                     {/* Product details*/}
    //                     <div className="card-body p-4">
    //                       <div className="text-center">
    //                         {/* Product name*/}
    //                         <h5 className="fw-bolder">{val.product_name}</h5>
    //                         {/* Product price*/}
    //                         Rs.{val.product_price}
    //                       </div>
    //                     </div>
    //                     {/* Product actions*/}
    //                     <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
    //                       <div className="text-center">
    //                         <a
    //                           className="btn btn-outline-dark mt-auto"
    //                           href="#"
    //                         >
    //                           Add to Cart
    //                         </a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               );
    //             })}
                
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
    <div className="container-fluid">
      <div className="row">
        <WatchFilter watches={watches} handleFilter={handleFilter} handlePrice={handlePrice} Prodprice={Prodprice} Prodpricerange={Prodpricerange} nameHandler={nameHandler} />
        <WatchFilterOrNot watches={watches} filteredDATA={filteredDATA} filterTags={filterTags} Prodprice={Prodprice}  prodname={prodname} />
        
      </div>
    </div>
    </>
  );
}

export default Watches_list;
