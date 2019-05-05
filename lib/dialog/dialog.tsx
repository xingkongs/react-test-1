import React, {Fragment} from "react";
import "./dialog.scss";
import Icon from "../icon/icon";
interface Props extends React.DOMAttributes<Element> {
    visible: boolean
}
const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className="xrui-dialog-mask"/>
                <div className="xrui-dialog">
                    <div className="xrui-dialog-close">
                        <Icon name="close"/>
                    </div>
                    <header className="xrui-dialog-header">title</header>
                    <main className="xrui-dialog-main">
                        {props.children}
                    </main>
                    <footer className="xrui-dialog-footer">
                        <button>ok</button>
                        <button>cancle</button>
                    </footer>
                </div>
            </Fragment>
            : null
    );
};
export default Dialog;