import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  changeCategoryReducer, // => changeCategoryReducer:changeCategoryReducer same thing.
  categoryListReducer,
  productListReducer,
  cartReducer,
});

export default rootReducer;
