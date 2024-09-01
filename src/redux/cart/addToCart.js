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
    try {
        return product;
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
        })
        builder.addCase(addToCartAction.fulfilled, (state, action) => {
            state.loading = false;

            const indexOfField = state.cart.findIndex(item => item.id === action.payload.id)

            if (indexOfField > -1) {

                if (state.cart[indexOfField].quantity && state.cart[indexOfField].quantity > 0) {
                    state.cart[indexOfField].quantity += 1
                } else {
                    state.cart[indexOfField] = Object.assign(state.cart[indexOfField], { quantity: 2 })
                }

            } else {
                state.cart.push(action.payload)
            }

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