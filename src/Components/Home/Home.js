import React from 'react';

import Header from './Header/Header.js';
import Shop from './Shop/Shop.js';
import OrderSummary from './OrderSummary/OrderSummary.js';

import fakeData from '../../fakeData/index.js';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchInput : "",
      cart : { no: 0 , itemsKey : [] }
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleInput(e){
    e.preventDefault();
    const input = e.target.value;
    this.setState({ searchInput : input});
  }

  handleAddToCart(itemKey){
    const no_of_cart_items = this.state.cart.no;
    let cart_items = this.state.cart.itemsKey;
    cart_items.push(itemKey);
    this.setState({ cart : { no: no_of_cart_items+1 , itemsKey : cart_items} });
  }

  render(){
    const items = fakeData.slice(0,10);
    return(
      <div className="Home">
       <Header />
       <Shop items={items} handleInput={this.handleInput}
             handleAddToCart={this.handleAddToCart} searchInput={this.state.searchInput}
             cart={this.state.cart}/>
       <OrderSummary cart={this.state.cart} items={items}/>
      </div>
    )
  }
}

export default Home;
