import React from 'react';
import { Link } from 'react-router-dom';

import './OrderSummary.css';



class OrderSummary extends React.Component{
  render(){
    /*  Calculating the price */
    const cart = this.props.cart;
    const cart_keys = cart.itemsKey;
    let items_price = 0;
    let shipping_price = 0;
    this.props.items.forEach((item) => {
      cart_keys.forEach((key) => {
        if( key===item.key){
          items_price+= Math.floor(item.price);
          shipping_price+= Math.floor(item.shipping);
        }
      })
    })
    const tax = Math.floor(items_price*(7/100));
    const items_price_without_tax = items_price+shipping_price;
    const total_price = tax + items_price_without_tax;
    /*************************/

    return(
      <div className="order-summary">
        <h2>Order Summary</h2>
        <h3>Items ordered: <span>{this.props.cart.no}</span></h3>
        <div className="order-detailed">
          <table>
           <tbody>
              <tr>
                <td>Items:</td><td>${items_price}</td>
              </tr>
              <tr>
                <td>Shiping & Handling:</td><td>${shipping_price}</td>
              </tr>
              <tr>
                <td>Total before tax:</td><td>${items_price_without_tax}</td>
              </tr>
              <tr>
                <td>Estimated tax:</td><td>${tax}</td>
              </tr>
              <tr className="order-total">
                <td>Order Total:</td><td>${total_price}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to='./Cart'><button>Review our order</button></Link>
      </div>
    );
  }
}

export default OrderSummary;
