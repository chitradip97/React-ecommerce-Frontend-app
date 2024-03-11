import { createContext,useState } from "react";

export const Cartcontext=createContext();

const Context=({children})=>{console.log('context reloded')
    const [cart,setCart]=useState([]);
    return <Cartcontext.Provider value={{cart,setCart}}>{children}</Cartcontext.Provider>
};

export default Context;