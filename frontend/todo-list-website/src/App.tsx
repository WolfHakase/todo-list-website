import './App.css';
import {TodoItemListPage} from './pages/TodoItemListPage'
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    container: {
        padding: theme.spacing(2)
    },
}));

function App() {
  return (
    <div className="App">
      <TodoItemListPage/>
    </div>
  );
}

export default App;
