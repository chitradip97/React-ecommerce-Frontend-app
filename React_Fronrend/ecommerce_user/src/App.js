// import logo from './logo.svg';
// import './App.css';
import User_master_layout from './user_layout/User_master_layout'
import { useState,useEffect,createContext } from 'react';
import axios from 'axios';
import Context from './Context';
// const productdata=createContext();
function App() {
  // const [product, setProduct] = useState([]);
  
  // async function getAllproduct() {
  //   try {
  //     const products_all = await axios.get(
  //       "http://127.0.0.1:1234/api/products"
  //     )
  //     console.log(products_all.data);
  //     setProduct(products_all.data);
      
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
    
  //   getAllproduct();
  //   console.log('useEffect called');
  //   // Product_price();
  // },[] );
  // useEffect(()=>{
  //   if(product)
  //   {

  //   }
  // })

  return (
    <div className="App">
      <div className="App">
      <Context>
        <User_master_layout/>
      </Context>
      </div>
    </div>
  );
}

export default App;
// export {productdata};
