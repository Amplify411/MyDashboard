import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId:"63701cc1f03239c72c000184",
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "dark"? "light" : "dark";
        },
    },
})

export const {setMode} = globalSlice.actions;

export default globalSlice.reducer;
