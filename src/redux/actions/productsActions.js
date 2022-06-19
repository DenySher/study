import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, CLEAR_CART } from './actionTypes'

export const addProductToCart = (payload) => ({
    type: ADD_PRODUCT_TO_CART,
    payload,
});

export const deleteProductFromCart = (payload) => ({
    type: DELETE_PRODUCT_FROM_CART,
    payload,
})

export const clearCart = () => ({
    type: CLEAR_CART,
})

