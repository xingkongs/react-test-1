import React, {Fragment} from "react";
import "../index.scss";
import "./dialog.scss";
import Icon from "../icon/icon";
import {scopedClassMaker} from "../helpers/scopedClass";
import Button from "../button/button";
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
                        <Button>ok</Button> <Button>cancle</Button>
                    </footer>
                </div>
            </Fragment>
            : null
    );
};
export default Dialog;