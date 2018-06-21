import React from 'react';

const Cart = props => (
    <div className="cart">
        <CartList items={props.items} handleClick={props.handleClick}/>
        <CartFooter items={props.items} />
    </div>
);

const CartFooter = props => {
        
    let total = 0;
    
    props.items.forEach( item => total += item.price);

    total = total/100;



    return(
        <div className="cart-footer">
            <span id="total">
                Total: $ {total}
            </span>
            <button>Checkout</button>
        </div>
    );
};

const CartList = props => (
    <ul>
    {props.items.map((item, index) => (
        <CartItem key={index} index={index} imgSrc={item.imgSrc} name={item.name} price={item.price} handleClick={props.handleClick}/>
    ))}
    </ul>
);

const CartItem = props => (
        <li>
            <img src={props.imgSrc} alt={props.name} />
            <div className="cart-item-info">
                <span className="cart-item-name">{props.name}</span>
                <span className="price">$ {props.price/100}</span>
                <button onClick={(e) => props.handleClick(props.index)}>Remove</button>
            </div>
        </li>
)
export default Cart;