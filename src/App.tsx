import React from 'react';
import './App.css';
import {Notes} from "./pages/notes/Notes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {setupStore} from "./redux/setupStore";
import {Provider} from "react-redux";

const store = setupStore()

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Notes/>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;