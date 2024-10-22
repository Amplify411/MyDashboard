import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global"
import { api } from "./api.js";

const store = configureStore({
    reducer: {
        global: globalReducer, 
        [api.reducerPath]: api.reducer ,
    },
    middleware: (getDefault) => getDefault().concat(api.middleware),
});

export default store;