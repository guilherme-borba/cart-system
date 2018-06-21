import React, { Component } from 'react';
import Header from './Header';
import Catalogue from './Catalogue';
import './App.css';

const PRODUCTS = [
  {category: 'car', sku: 1, name: 'Ford Fusion Hybrid', imgSrc: '/img/expl.jpg', price: 600000},
  {category: 'music', sku: 2, name: 'Two Steps From Hell - Album', imgSrc: '/img/expl.jpg', price: 1000},
  {category: 'food', sku: 3, name: 'Peanut Butter', imgSrc: '/img/expl.jpg', price: 500},
  {category: 'music', sku: 4, name: 'Guitar', imgSrc: '/img/expl.jpg', price: 4550},
  {category: 'food', sku: 5, name: 'Kit-kat', imgSrc: '/img/expl.jpg', price: 300},
  {category: 'school', sku: 6, name: 'Notepad', imgSrc: '/img/expl.jpg', price: 600}
]


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cartItems: [],
    }

    this.addCartItem = this.addCartItem.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
  }

  removeCartItem = index => {
    console.log(index);
    let newCartItems = Object.assign([], this.state.cartItems);
    newCartItems = newCartItems.filter( item => newCartItems.indexOf(item) !== index);

    this.setState({
      cartItems: newCartItems,
    })

  }
  addCartItem = item => {
    let newCartItems = Object.assign([], this.state.cartItems);
    newCartItems.push(item);

    this.setState({
      cartItems: newCartItems,
    })
  }

  render() {
    return (
      <div>
        <Header cartItems={this.state.cartItems} handleClick={ this.removeCartItem }/>
        <Catalogue listOfProducts={PRODUCTS} handleClick={ this.addCartItem }/>
      </div>
    );
  }
}

export default App;
