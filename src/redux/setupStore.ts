import {combineReducers, configureStore} from "@reduxjs/toolkit";
import notesReducer from './reducers/NotesSlice'

const rootReducer = combineReducers({
    notesReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStateType = ReturnType<typeof setupStore>
export type AppDispatch = AppStateType['dispatch']