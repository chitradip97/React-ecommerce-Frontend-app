import { createContext,useState } from "react";

export const Cartcontext=createContext();

const Context=({children})=>{console.log('context reloded')
    const [cart,setCart]=useState([]);
    const [summery,setSummery]=useState({});
    return <Cartcontext.Provider value={{cart,setCart,summery,setSummery}}>{children}</Cartcontext.Provider>
};

export default Context;