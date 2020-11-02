import React from "react";
import {PositiveButtonComponent} from "../components/PositiveButtonComponent";
import {AddCircle} from '@material-ui/icons';

export class TodoItemListPage extends React.Component {
    render() {
        return <PositiveButtonComponent TestID={"navigate-to-create-page-button"} Icon={<AddCircle/>} Content={"Create"} OnClick={ () => {} } />;
    }
}
