import React from "react";
import {PositiveButtonComponent} from "../components/PositiveButtonComponent";
import {AddCircle} from '@material-ui/icons';

export class TodoItemListPage extends React.Component {
    render() {
        return (
            <div>
                {/*todo make a header component*/}
                <h1>Create Page</h1>
                <PositiveButtonComponent TestID={"navigate-to-create-page-button"} Icon={<AddCircle/>}
                                         Content={"Create"}
                                         OnClick={() => {
                                         }}/>
            </div>
        );
    }
}
