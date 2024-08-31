/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"

const initialState = {
    currentCategory: {},
    loading: false,
    data: {},
    error: {}
}

const changeCategoryAction = createAsyncThunk("CHANGE_CATEGORY_ACTION", async (

    category,

    { rejectWithValue }) => {
    try {
        return category;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const changeCategorySlice = createSlice({
    name: "change-category",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(changeCategoryAction.pending, (state) => {
            state.loading = true;
            state.categories = [];
        })
        builder.addCase(changeCategoryAction.fulfilled, (state, action) => {
            state.loading = false;
            state.currentCategory = action.payload;
        })
        builder.addCase(changeCategoryAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export { changeCategoryAction };
export const { } = changeCategorySlice.actions
export default changeCategorySlice.reducer