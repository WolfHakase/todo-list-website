import React from "react";
import {PositiveButtonComponent} from "../components/PositiveButtonComponent";
import {AddCircle} from '@material-ui/icons';
import {HeaderComponent} from "../components/HeaderComponent";

export class TodoItemListPage extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent Title={"List Page"} />
                <PositiveButtonComponent TestID={"navigate-to-create-page-button"} Icon={<AddCircle/>}
                                         Content={"Create"}
                                         OnClick={() => {
                                         }}/>
            </div>
        );
    }
}
