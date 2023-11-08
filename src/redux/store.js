import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./eventReducer";

export const store = configureStore({
    reducer:{
        eventsReducer
    }
})