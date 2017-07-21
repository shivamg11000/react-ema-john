import React from 'react';
import ShopItem from './ShopItem.js';

import './Shop.css';

class Shop extends React.Component{

  render(){

    const itemList = this.props.items.map((item) => (
      (this.props.searchInput==="" || item.name.toLowerCase().includes(this.props.searchInput.toLowerCase()))
      &&
      <ShopItem item={item} key={item.key} handleAddToCart={this.props.handleAddToCart}/>
    ));

    return(
      <div className="shop">
        <form className="search-bar" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Enter product" onChange={this.props.handleInput}/>
          <div>Cart: <span>{this.props.cart.no}</span></div>
        </form>
        {itemList}
      </div>
    );

  }
}


export default Shop;
