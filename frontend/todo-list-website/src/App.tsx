import './App.css';
import {TodoItemListPage} from './pages/TodoItemListPage'
import React from "react";
import {ThemeProvider} from '@material-ui/core/styles'
import {theme} from "./Theme";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <TodoItemListPage/>
            </ThemeProvider>
        </div>
    );
}

export default App;
