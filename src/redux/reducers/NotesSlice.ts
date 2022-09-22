import {images, Note} from "../../common";
import {randomID} from "../../helpers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type NotesState = {
    notes: Note[] ;
    error: string;
}

const initialState: NotesState = {
    notes: [
        {
            id: randomID(),
            image: images.task,
            name: 'Shopping list',
            created: 'April 20,2021',
            category: 'Task',
            content: 'Tomatoes, bread',
            active: true,
            dates: '',
            redact: false
        },
        {
            id: randomID(),
            image: images.randomThought,
            name: 'The theory of evolution',
            created: 'April 27,2021',
            category: 'Random Thought',
            content: 'Human evolution',
            active: true,
            dates: '',
            redact: false
        },
        {
            id: randomID(),
            image: images.idea,
            name: 'New Feature',
            created: 'May 05,2021',
            category: 'Idea',
            content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
            active: true,
            dates: '3/5/2021, 5/5/2021',
            redact: false
        },
        {
            id: randomID(),
            image: images.task,
            name: 'William Gabbi\'s',
            created: 'May 07,2021',
            category: 'Task',
            content: 'Power doesn\'t exist',
            active: true,
            dates: '',
            redact: false
        },
        {
            id: randomID(),
            image: images.task,
            name: 'Books',
            created: 'May 15,2021',
            category: 'Task',
            content: 'The Lean Startup',
            active: true,
            dates: '',
            redact: false
        },
        {
            id: randomID(),
            image: images.idea,
            name: 'Build',
            created: 'April 15,2021',
            category: 'Idea',
            content: 'Build a warehouse for firewood',
            active: false,
            dates: '',
            redact: false
        },
    ],
    error: ''
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        archiveAll(state, action: PayloadAction<boolean>){
            state.notes.map(item => item.active = action.payload)
        },
        removeAll(state, action: PayloadAction<Note[]>){
            state.notes = action.payload
        },
        archiveNote(state, action: PayloadAction<string>){
            const index = state.notes.findIndex(item => item.id === action.payload)
            const actItem = state.notes[index].active
            state.notes[index].active = !actItem;
        },
        removeNote(state, action: PayloadAction<string>){
            const index = state.notes.findIndex(item => item.id === action.payload)
            if (index >= 0){state.notes.splice(index, 1)}
        },
        addNevNote(state, action: PayloadAction<Note>){
            state.notes.push(action.payload)
            state.notes.map(item => {
                if(item.redact){

                }
            })
        },
        redactNote(state, action: PayloadAction<Note>) {
            const index = state.notes.findIndex(item => item.id === action.payload.id)
            let newNote = action.payload
            if (action.payload.redact){
                newNote = {
                    id: action.payload.id,
                    image: action.payload.image,
                    name: action.payload.name,
                    created: action.payload.created,
                    category: action.payload.category,
                    content: action.payload.content,
                    active: action.payload.active,
                    dates: action.payload.dates,
                    redact: false
                }
            }
            state.notes[index] = newNote

        },
        refreshNote(state, action: PayloadAction<string>){
            const index = state.notes.findIndex(item => item.id === action.payload)
            const actItem = state.notes[index].redact
            state.notes[index].redact = !actItem;
        }
    }
});

export default notesSlice.reducer