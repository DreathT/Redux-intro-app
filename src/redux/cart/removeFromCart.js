/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    loading: false,
    data: {},
    error: {}
}

const removeFromCartAction = createAsyncThunk("REMOVE_FROM_CART_ACTION", async (

    product

    , { rejectWithValue }) => {
    try {
        const newCart = initialState.cart.filter(
            (cartItem) => cartItem.product.id !== product.id
        );
        return newCart;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const removeFromCartSlice = createSlice({
    name: "remove-from-cart",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(removeFromCartAction.pending, (state) => {
            state.loading = true;
            state.cart = [];
        })
        builder.addCase(removeFromCartAction.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
        })
        builder.addCase(removeFromCartAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export { removeFromCartAction };
export const { } = removeFromCartSlice.actions
export default removeFromCartSlice.reducer