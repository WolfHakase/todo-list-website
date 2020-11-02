import React from "react";
import {PositiveButtonComponent} from "../components/PositiveButtonComponent";

export class TodoItemListPage extends React.Component {
    render() {
        return <PositiveButtonComponent TestID={"navigate-to-create-page-button"} Content={"this is a button"} OnClick={ () => {} } />;
    }
}
