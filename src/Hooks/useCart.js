import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb"

const useCart=products=>{
    const [cart,setCarts]=useState([]);
    useEffect(()=>{
        if(products.length){
            const getItem=getStoredCart();
            const cartAdd=[];
            for(const key in getItem){
                const matchedKey=products.find(product=>product.key===key);
                if(matchedKey){
                const quantity=getItem[key];
                matchedKey.quantity=quantity;
                cartAdd.push(matchedKey);
                }
            }
            setCarts(cartAdd); 
        }

    },[products])
    return [cart,setCarts]
}
export default useCart;