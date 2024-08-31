import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        appLoading: (state) => {
            state.loading = true
        },
        appDoneLoading: (state) => {
            state.loading = false
        }
    }
})

export const { appLoading, appDoneLoading } = appSlice.actions

export default appSlice.reducer