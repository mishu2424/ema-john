import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCarts]=useState([]);
    const [display,setDisplay]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplay(data)
        })
    },[])
    useEffect(()=>{
        
        

        if(products.length){
            const getItem=getStoredCart();
            const cartAdd=[];
            for(const key in getItem){
                const matchedKey=products.find(product=>product.key===key);
                console.log(key,matchedKey);
               
                if(matchedKey){
                    const quantity=getItem[key];
                    matchedKey.quantity=quantity;
                    cartAdd.push(matchedKey);
                }
                
                
            }
            setCarts(cartAdd)
        }
     
     
    },[products])

    const handlerAdd=product=>{
        const exists=cart.find(pd=>pd.key===product.key);
        let newCart=[];
        if(exists){
            const rest=cart.filter(pd=>pd.key!==product.key);
            exists.quantity=exists.quantity+1;
            newCart=[...rest,product]
        }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }
        // const newCart=[...cart,product];
        setCarts(newCart);
        addToDb(product.key);
    }
    
    const handlerSearch=event=>{
        const searchText=event.target.value;
        const getResult=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplay(getResult);
    }
    return (
        <div>
            <div className="search-box">
                <input type="text" onChange={handlerSearch} placeholder="search products" className="style-input" />
            </div>
                  <div className="parent-container">
            <div className="product-container">
                  {
                      display.map(product=><Product 
                        key={product.key}
                        product={product}
                        handler={handlerAdd}
                        ></Product>)
                  }
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                   <Link to="/review">
                       <button style={{width:'150px',height:'30px',backgroundColor:'goldenrod',border:'none'}}>Place Order</button>
                   </Link>
               </Cart>
            </div>
        </div>
        </div>
 
    );
};

export default Shop;