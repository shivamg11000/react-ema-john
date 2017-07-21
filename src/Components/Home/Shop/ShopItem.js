import React from 'react';

import './ShopItem.css';

class ShopItem extends React.Component{
  render(){
    const item = this.props.item;
    return(
      <div className="shop-item">
        <div className="item-pic">
          <img src={item.img} alt="img"/>
        </div>
        <div className="item-data">
          <p className="title">{item.name}</p>
          <span className="price">$ {item.price}</span>
          <span className="stock">Only {item.stock} left in stock - order soon</span>
          <button onClick={() => this.props.handleAddToCart(item.key)}>add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ShopItem;
