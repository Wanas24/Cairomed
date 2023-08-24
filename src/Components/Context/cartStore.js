import { createContext, useState } from "react";

export let CartContext=createContext([]);

export default function CartContextProvider(props){

    let [myCart,setMyCart]=useState([]);

   

    return <CartContext.Provider  value={{myCart,setMyCart}}>
        {props.children}
    </CartContext.Provider>
}