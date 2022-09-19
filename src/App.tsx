import React from 'react';
import './App.css';
import {Notes} from "./pages/notes/Notes";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
