import { createContext,useState } from "react";

export const Cartcontext=createContext();

const Context=({children})=>{
    const [cart,setCart]=useState(['b','p','n','i']);
    return <Cartcontext.Provider value={{cart,setCart}}>{children}</Cartcontext.Provider>
};

export default Context;