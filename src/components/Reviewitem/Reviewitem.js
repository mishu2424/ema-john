import React from 'react';

const Reviewitem = (props) => {
    const {name,seller,price,key}=props.product;
    const {handler}=props
    return (
        <div style={{
            marginRight:'2%'
        }}>
            <h4>{name}</h4>
            <h5>{seller}</h5>
            <h6>{price}</h6>
            <button onClick={()=>handler(key)} style={{width:'150px',height:'30px',backgroundColor:'goldenrod',border:'none'}}>Remove</button>
            <hr />
        </div>
    );
};

export default Reviewitem;