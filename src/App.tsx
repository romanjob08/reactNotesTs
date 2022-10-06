import React from 'react';
import {Notes} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {setupStore} from "./redux";
import {Provider} from "react-redux";

const store = setupStore()

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route
                        path="/"
                        element={<div className='max-w-screen-lg p-4 h-full mx-auto my-2 '>
                            <Notes/>
                        </div>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;