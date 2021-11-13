import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);
    const {cart}=props;

    // console.log(cart);
    let totalQuantity=0;
    let total=0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        totalQuantity=totalQuantity+product.quantity
        total=total+product.price*product.quantity;
    }
    // const total=cart.reduce((previous,current)=>previous+current.price,0)
    // cart.reduce((total,current)=>total+current.price,0)
    const shipping=200;
    const tax=(total+shipping)*0.1;
    const grandtotal=total+shipping+tax;
    return (
        <div className="cart-design">
            <h1 style={{textAlign:'center'}}>Order Summary</h1>
            <h4 style={{textAlign:'center'}}>Items ordered:{totalQuantity}</h4>
            <h4>Total:{total.toFixed(2)}</h4>
            <h4>Shipping:{shipping}</h4>
            <h4>Tax:{tax.toFixed(2)}</h4>
            <hr />
            <h4>Grandtotal={grandtotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;