import { createContext,useState } from "react";

export const Cartcontext=createContext();

const Context=({children})=>{console.log('context reloded')
    const [loginid, setLoginid] = useState([]);
    const [cart,setCart]=useState([]);
    const [summery,setSummery]=useState({});
    const [paymentdetails,setPaymentdetails]=useState({Cardname:'',Cardnumber:'',Expairy:'',Cvv:''});
    const [checkoutdetails,setCheckoutdetails]=useState({Fname:'',Lname:'',Phone:'',Email:'',Adress:'',City:'',House:'',Pin:'',Dist:'',Message:''});
    return <Cartcontext.Provider value={{loginid, setLoginid,cart,setCart,summery,setSummery,checkoutdetails,setCheckoutdetails,paymentdetails,setPaymentdetails}}>{children}</Cartcontext.Provider>
};

export default Context;