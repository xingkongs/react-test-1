import React, {Fragment} from "react";
interface Props extends React.DOMAttributes<Element>{
    visible:boolean
}
const Dialog:React.FunctionComponent<Props> = (props) => {
    return (
        <Fragment>
            {props.visible?<div>dialog{props.visible}</div>:""}
        </Fragment>
    );
};
export default Dialog;