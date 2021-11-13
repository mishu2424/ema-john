import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';


const Product = (props) => {
    const {img,name,seller,price,stock,star}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="single-product-design">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className="single-div-design">
            <h4>{name}</h4>
            <p>by:{seller}</p>
            <p>Price:${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <Rating
            initialRating={star}
             emptySymbol="far fa-star"
             fullSymbol="fas fa-star"
            readonly></Rating>
            <br />
            <button onClick={()=>props.handler(props.product)} style={{width:'150px',height:'30px',backgroundColor:'goldenrod',border:'none'}}>{element} Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;