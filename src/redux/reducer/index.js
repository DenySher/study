import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    modalReducer,
    productsReducer,
})

export default rootReducer