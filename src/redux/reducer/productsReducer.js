import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  CLEAR_CART,
} from "../actions/actionTypes";

const initialState = {
  productsList: [
    { name: "Macbook", id: "fdjas;fjads;lfjdals;" },
    { name: "Iphone", id: "213fdasfas;" },
    { name: "Ipad", id: "fd21fdlsa;" },
    { name: "Apple watch", id: "310jflds;" },
    { name: "Air pods", id: "fdvml23;" },
  ],
  cartList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };

    case DELETE_PRODUCT_FROM_CART:
      const id = action.payload;
      const newCartList = state.cartList.filter((product) => id !== product.id);
      return {
        ...state,
        cartList: newCartList,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartList: [],
      };
    default:
      return state;
  }
};

export default productsReducer;
