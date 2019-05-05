import React, {Fragment} from "react";
import "./dialog.scss";
import Icon from "../icon/icon";
import {scopedClassMaker} from "../helpers/scopedClass";
interface Props extends React.DOMAttributes<Element> {
    visible: boolean
}
const scopedClass = scopedClassMaker("xrui-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={sc("mask")}/>
                <div className={sc()}>
                    <div className={sc("close")}>
                        <Icon name="close"/>
                    </div>
                    <header className={sc("header")}>title</header>
                    <main className={sc("main")}>
                        {props.children}
                    </main>
                    <footer className={sc("footer")}>
                        <button>ok</button>
                        <button>cancle</button>
                    </footer>
                </div>
            </Fragment>
            : null
    );
};
export default Dialog;