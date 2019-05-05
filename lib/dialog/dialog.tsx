import React, {Fragment} from "react";
import "../index.scss";
import "./dialog.scss";
import Icon from "../icon/icon";
import {scopedClassMaker} from "../helpers/scopedClass";
import ReactDOM from "react-dom";
import Button from "../button/button";
interface Props extends React.DOMAttributes<Element> {
    visible: boolean,
    buttons?: Array<React.ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean
}
const scopedClass = scopedClassMaker("xrui-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    };
    const x = props.visible ?
        <Fragment>
            <div className={sc("mask")} onClick={onClickMask}/>
            <div className={sc()}>
                <div className={sc("close")} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc("header")}>title</header>
                <main className={sc("main")}>
                    {props.children}
                </main>
                {
                    props.buttons && props.buttons.length > 0 ?
                        <footer className={sc("footer")}>
                            {props.buttons.map((button, index) => {
                                return React.cloneElement(button, {key: index});
                            })}
                        </footer>
                        : null
                }
            </div>
        </Fragment>
        : null;
    return ReactDOM.createPortal(x, document.body);
};
Dialog.defaultProps = {
    closeOnClickMask: false
};
const modal = (content: React.ReactNode, buttons?: Array<React.ReactElement>, afterClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component = (
        <Dialog
            visible={true}
            onClose={() => {
                close();
                afterClose && afterClose();
            }}
            buttons={buttons}>
            {content}
        </Dialog>);
    const div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(component, div);
    return close;
};
const alert = (content: React.ReactNode) => {
    const button = <Button value="ok" onClick={() => {close();}}/>;
    const close = modal(content, [button]);
};
const confirm = (content: React.ReactNode, yes: () => void, no: () => void) => {
    const onYes = () => {
        close();
        yes();
    };
    const onNo = () => {
        close();
        no();
    };
    const buttons = [
        <Button onClick={onYes} value="yes"/>,
        <Button onClick={onNo} value="no"/>
    ];
    const close = modal(content, buttons, no);
};
export {alert, confirm, modal};
export default Dialog;