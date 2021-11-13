import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';

const Orderreview = () => {
    const [products]=useProducts();
    const [cart,setCarts]=useCart(products);
    const history=useHistory();
    console.log(cart);
    const handlerRemove=key=>{
        const newCart=cart.filter(product=>product.key!==key)
        setCarts(newCart);
        deleteFromDb(key);
    }
    const handlerReview=()=>{
        history.push('/Reviews')
        setCarts([]);
        clearTheCart();
    }
    return (
        <div className="parent-container">
            <div className="product-container">
               {
                   cart.map(product=><Reviewitem 
                    key={product.key} 
                    product={product}
                    handler={handlerRemove}
                    ></Reviewitem>)
               }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
                <button onClick={handlerReview}>Order review</button>
            </Cart>
         </div>
        </div>
    );
};

export default Orderreview;
