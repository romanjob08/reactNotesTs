import {images, Note} from "../../common";
import {randomID} from "../../helpers";
import {createSlice} from "@reduxjs/toolkit";

type NotesState = {
    notes: Note[];
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
            dates: ''
        },
        {
            id: randomID(),
            image: images.randomThought,
            name: 'The theory of evolution',
            created: 'April 27,2021',
            category: 'Random Thought',
            content: 'Human evolution',
            active: true,
            dates: ''
        },
        {
            id: randomID(),
            image: images.idea,
            name: 'New Feature',
            created: 'May 05,2021',
            category: 'Idea',
            content: 'Implement updates',
            active: true,
            dates: '3/5/2021, 5/5/2021'
        },
        {
            id: randomID(),
            image: images.task,
            name: 'William Gabbi\'s',
            created: 'May 07,2021',
            category: 'Task',
            content: 'Power doesn\'t exist',
            active: true,
            dates: ''
        },
        {
            id: randomID(),
            image: images.task,
            name: 'Books',
            created: 'May 15,2021',
            category: 'Task',
            content: 'The Lean Startup',
            active: true,
            dates: ''
        },
        {
            id: randomID(),
            image: images.idea,
            name: 'Build',
            created: 'April 15,2021',
            category: 'Idea',
            content: 'Build a warehouse for firewood',
            active: false,
            dates: ''
        },
    ],
    error: ''
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
    }
});

export default notesSlice.reducer