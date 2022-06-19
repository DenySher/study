import { createSelector } from "reselect";

const selectState = (state) => state.productsReducer;

export const selectProductsList = createSelector(
  selectState,
  (state) => state.productsList
);

export const selectCartList = createSelector(
  selectState,
  (state) => state.cartList
);
