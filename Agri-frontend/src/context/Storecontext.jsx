import { createContext, useEffect, useState } from "react";
import { product } from "../assets/assets";

export const Storecontext =createContext(null)
const Storecontextprovider=(props)=>{
    const[productitem,setproductitem]=useState([]);


    const fetchproduct=async()=>{
        setproductitem(product)
    }

useEffect(()=>{
    fetchproduct();

},[])

const contextvalue={
    productitem,
    setproductitem
}

return (
    <Storecontext.Provider value={contextvalue}>
        {props.children}
    </Storecontext.Provider>
)
}