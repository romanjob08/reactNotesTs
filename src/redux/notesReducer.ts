import {randomID} from "../suportFiles/suportFiles";
import {createReducer} from "@reduxjs/toolkit";

const arrMonths = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

export type CategoriesType = 'Task' | 'Random Thought' | 'Idea';
export type NotesInitialStateType = typeof initialState

const categoriesState = {
    task: 'Task',
    randomThought: 'Random Thought',
    idea: 'Idea'
};

const initialState = [
    {
        id: randomID(),
        image: "fa fa-shopping-cart",
        name: 'Shopping list',
        created: 'April 20,2021',
        category: categoriesState.task,
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
        category: categoriesState.randomThought,
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
        category: categoriesState.idea,
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
        category: categoriesState.task,
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
        category: categoriesState.task,
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
        category: categoriesState.idea,
        content: 'Build a warehouse for firewood',
        active: false,
        archived: true,
        dates: ''
    },
];

export const categoriesNotes = {
    name: 'Name',
    created: 'Created',
    category: 'Category',
    content: 'Content',
    dates: 'Dates'
};

export const statusCategories = {
    noteCategory: 'Note Category',
    active: 'Active',
    archived: 'Archived'
};

export default createReducer(initialState, {

})