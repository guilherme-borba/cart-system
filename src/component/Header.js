import React from 'react';
import Cart from './Cart';

const Header = props => {
    return(
        <header>
            <span id="logo">Cart-System</span>
            <label id="open-cart" htmlFor="open-cart-input">
                Cart
                <span id="qty-cart-items" >{props.cartItems.length}</span>
            </label>
            <input type="checkbox" id="open-cart-input" onClick={props.openCart}/>
            <Cart items={props.cartItems} handleClick={ props.handleClick } />
        </header>
    )
};

export default Header;