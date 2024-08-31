/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products: [],
    loading: false,
    data: {},
    error: {}
}

const getProductsAction = createAsyncThunk("GET_PRODUCTS_ACTION", async (

    categoryId

    , { rejectWithValue }) => {
    try {
        let endpoint = "http://localhost:3000/products" + (categoryId ? "?categoryId=" + categoryId : "")
        const response = await axios.get(endpoint)
        return response.data;

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getProductsSlice = createSlice({
    name: "get-products",
    initialState, // in js it's mean like that: initialState: initialState
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProductsAction.pending, (state) => {
            state.loading = true;
            state.products = [];
        })
        builder.addCase(getProductsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(getProductsAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export { getProductsAction };
export const { } = getProductsSlice.actions
export default getProductsSlice.reducer