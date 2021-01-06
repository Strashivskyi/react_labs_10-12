import * as actionTypes from "../constants/cartConstants";
import {getOne} from "../../api/Crud";


export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await getOne(id);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data.id,
      title: data.title,
      bank_name: data.bank_name,
      image: data.image,
      annualFee: data.annualFee,
      rewardsRateInPercent: data.rewardsRateInPercent,
      countInStock: data.countInStock,
      price: data.price,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};