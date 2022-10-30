import axios from "axios"
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants"

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/courses/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      course: data._id,
      name: data.name,
      image: data.image ,
      price: data.price,
      description: data.description,
      
    },
  })
  console.log("data", data)
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  console.log("remove actions")
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

