import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "./notesReducer";

export const store = configureStore({
    reducer: {
        notesPage: notesReducer
    }
})


export type AppStateType = ReturnType<typeof store.getState>