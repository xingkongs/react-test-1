import React, {Fragment} from "react";
import "./dialog.scss";
interface Props extends React.DOMAttributes<Element> {
    visible: boolean
}
const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className="xrui-dialog-mask"/>
                <div className="xrui-dialog">{props.children}</div>
            </Fragment>
            : null
    );
};
export default Dialog;