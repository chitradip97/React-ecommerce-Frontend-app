import React from 'react'
import axios from 'axios';

const ApiContent={
    fetchAllProducts: async ()=>{
        try {
            const products_all = await axios.get(
              "http://127.0.0.1:1234/api/products"
            );
            // console.log(products_all.data);
            // setProduct(products_all.data);
            return products_all;
          } catch (error) {
            console.log(error);
          }
    }
}

export {ApiContent}