import {INotes} from "../../models/INotes";
import {randomID} from "../../models/suportFunctions";
import {createSlice} from "@reduxjs/toolkit";

interface NotesState {
    notes: INotes[];
    categories: CategoriesType;
    statusCategories: StatusCategoriesType;
    categoriesNotes: CategoriesNotesType;
    arrMonths: ArrMonthsType[];
    isLoading: boolean;
    error: string;
}

export type ArrMonthsType =
    'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December'

export type CategoriesType = {
    task: 'Task',
    randomThought: 'Random Thought',
    idea: 'Idea'
};
export type StatusCategoriesType = {
    notesCategory: 'Note Category',
    activeNotes: 'Active',
    archive: 'Archived'
};
export type CategoriesNotesType = {
    name: 'Name',
    created: 'Created',
    category: 'Category',
    content: 'Content',
    dates: 'Dates'
};

const initialState: NotesState = {
    notes: [
        {
            id: randomID(),
            image: "fa fa-shopping-cart",
            name: 'Shopping list',
            created: 'April 20,2021',
            category: 'Task',
            content: 'Tomatoes, bread',
            active: true,
            archived: false,
            dates: ''
        },
        {
            id: randomID(),
            image: "fa fa-exclamation-circle",
            name: 'The theory of evolution',
            created: 'April 27,2021',
            category: 'Random Thought',
            content: 'Human evolution',
            active: true,
            archived: false,
            dates: ''
        },
        {
            id: randomID(),
            image: "fa fa-lightbulb-o",
            name: 'New Feature',
            created: 'May 05,2021',
            category: 'Idea',
            content: 'Implement updates',
            active: true,
            archived: false,
            dates: '3/5/2021, 5/5/2021'
        },
        {
            id: randomID(),
            image: "fa fa-shopping-cart",
            name: "William Gabbi's",
            created: 'May 07,2021',
            category: 'Task',
            content: 'Power doesn\'t exist',
            active: true,
            archived: false,
            dates: ''
        },
        {
            id: randomID(),
            image: "fa fa-shopping-cart",
            name: 'Books',
            created: 'May 15,2021',
            category: 'Task',
            content: 'The Lean Startup',
            active: true,
            archived: false,
            dates: ''
        },
        {
            id: randomID(),
            image: "fa fa-lightbulb-o",
            name: 'Build',
            created: 'April 15,2021',
            category: 'Idea',
            content: 'Build a warehouse for firewood',
            active: false,
            archived: true,
            dates: ''
        },
    ],
    categories: {
        task: 'Task',
        randomThought: 'Random Thought',
        idea: 'Idea'
    },
    categoriesNotes: {
        name: 'Name',
        created: 'Created',
        category: 'Category',
        content: 'Content',
        dates: 'Dates'
    },
    statusCategories: {
        notesCategory: 'Note Category',
        activeNotes: 'Active',
        archive: 'Archived'
    },
    arrMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    isLoading: false,
    error: ''
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {}
});

export default notesSlice.reducer