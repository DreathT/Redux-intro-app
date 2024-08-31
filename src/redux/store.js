import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import getProductsReducer from "./product/getProducts"
import getAllCategoriesReducer from "./category/getAllCategories";
import changeCategoryReducer from "./category/changeCategory";
import addToCartReducer from "./cart/addToCart";
import removeFromCartReducer from "./cart/removeFromCart";


export const store = configureStore({
    reducer: {
        app: appReducer,
        getProducts: getProductsReducer,
        getAllCategories: getAllCategoriesReducer,
        changeCategory: changeCategoryReducer,
        addToCart: addToCartReducer,
        removeFromCart: removeFromCartReducer,
    }
})