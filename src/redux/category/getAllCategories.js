/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    categories: [],
    loading: false,
    data: {},
    error: {}
}

const getAllCategoriesAction = createAsyncThunk("GET_ALL_CATEGORIES_ACTION", async (_, { rejectWithValue }) => {
    try {
        let endpoint = "http://localhost:3000/categories"
        const response = await axios.get(endpoint)
        return response.data;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getAllCategoriesSlice = createSlice({
    name: "get-all-categories",
    initialState, // in js it's mean like that: initialState: initialState
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllCategoriesAction.pending, (state) => {
            state.loading = true;
            state.categories = [];
        })
        builder.addCase(getAllCategoriesAction.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        builder.addCase(getAllCategoriesAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export { getAllCategoriesAction };
export const { } = getAllCategoriesSlice.actions
export default getAllCategoriesSlice.reducer