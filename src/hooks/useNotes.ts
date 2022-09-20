import {useAppSelector} from "./redux";

export const useNotes = () => useAppSelector(state => state.notesReducer)