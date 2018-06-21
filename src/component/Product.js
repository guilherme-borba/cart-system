import React from 'react';

const Product = props => (
    <div className="product">
        <img src={props.imgSrc} alt={props.name} />
        <h6>{props.name}</h6>
        <span className="price">$ {props.price/100}</span>
        <button onClick={ (e) => props.handleClick({...props}) }>Add to Cart</button>
    </div>
);

export default Product; 