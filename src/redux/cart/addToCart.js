/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    loading: false,
    data: {},
    error: {}
}

const addToCartAction = createAsyncThunk("ADD_TO_CART_ACTION", async (

    product

    , { rejectWithValue }) => {
    console.log("addToCart product parametre: ", product)
    console.log("addToCart product.id parametre: ", product.id)
    try {
        console.log("initialState.cart: ", initialState.cart)
        let addedItem = initialState.cart && initialState.cart.find(
            (item) => item.id === product.id
        );
        console.log("!!addedItem: ", !!addedItem)
        if (!!addedItem) { // !! this operator convert value to boolean (true/false)
            let newCart = initialState.cart.map((item) => {
                if (item.product.id === product.id) {
                    return Object.assign({}, addedItem, {
                        quantity: addedItem.quantity + 1,
                    });
                }
                console.log("item: ", item)
                return item;
            });
            console.log("newCart: ", newCart)
            return newCart;
        } else {
            return [...initialState.cart, { ...product }];
        }

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const addToCartSlice = createSlice({
    name: "add-to-cart",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addToCartAction.pending, (state) => {
            state.loading = true;
            state.cart = [];
        })
        builder.addCase(addToCartAction.fulfilled, (state, action) => {
            console.log("action payload fullFilled", action.payload)
            state.loading = false;
            state.cart = action.payload;
            console.log("fullfilled state.cart", state.cart)
        })
        builder.addCase(addToCartAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export { addToCartAction };
export const { } = addToCartSlice.actions
export default addToCartSlice.reducer