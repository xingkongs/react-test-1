import React, {Fragment} from "react";
import "../index.scss";
import "./dialog.scss";
import Icon from "../icon/icon";
import {scopedClassMaker} from "../helpers/scopedClass";
interface Props extends React.DOMAttributes<Element> {
    visible: boolean,
    buttons: Array<React.ReactElement>,
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
    return (
        props.visible ?
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
                    <footer className={sc("footer")}>
                        {props.buttons.map((button, index) => {
                            return React.cloneElement(button, {key: index});
                        })}
                    </footer>
                </div>
            </Fragment>
            : null
    );
};
Dialog.defaultProps = {
    closeOnClickMask: false
};
export default Dialog;