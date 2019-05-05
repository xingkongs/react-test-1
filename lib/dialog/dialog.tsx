import React, {Fragment} from "react";
interface Props extends React.DOMAttributes<Element>{
    visible:boolean
}
const Dialog:React.FunctionComponent<Props> = (props) => {
    return (
        <Fragment>
            {props.visible?<div>{props.children}</div>:""}
        </Fragment>
    );
};
export default Dialog;