import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./CartScreen.css";
import {
  StyledButton
} from "../SingleProduct/SingleProductInfo.styled";
import CartItem from "./CartItem";

import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;


  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };



  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0);
  };

  return (
    <>
    <br/>
    <br/>
    <p className="shopping_cart_title">Shopping Cart</p>
      <div>
        <div>
          {cartItems.length === 0 ? (
            <div>
              <p className="emptyCart">-------------Your Cart Is Empty-------------</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />

            ))
          )}
        </div>

        <div>
          <div className="cart_text_under_items">
            <p>You have <span className="cart_text_under_items_price">{getCartCount()}</span> items in your cart</p>
            <p>Total price: <span className="cart_text_under_items_price">${getCartSubTotal()}</span></p>

          </div>
          <div className="buttons">
          <Link to={'/products'}><StyledButton type="text" shape="round" className="left_button">Back to Catalog</StyledButton></Link>;
          <Link to={'/form'}><StyledButton type="text" shape="round">Proceed and Checkout</StyledButton></Link>;
          </div>


          
        </div>
      </div>
    </>
  );
};

export default CartScreen;
