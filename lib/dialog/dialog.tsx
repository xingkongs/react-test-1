import React, {Fragment} from "react";
import "./dialog.scss";
import Icon from "../icon/icon";
interface Props extends React.DOMAttributes<Element> {
    visible: boolean
}
function y(prefix: string) {
    return function (name?: string) {
        return [prefix, name].filter(Boolean).join("-");
    };
}
const x = y("xrui-dialog");
const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={x("mask")}/>
                <div className={x()}>
                    <div className={x("close")}>
                        <Icon name="close"/>
                    </div>
                    <header className={x("header")}>title</header>
                    <main className={x("main")}>
                        {props.children}
                    </main>
                    <footer className={x("footer")}>
                        <button>ok</button>
                        <button>cancle</button>
                    </footer>
                </div>
            </Fragment>
            : null
    );
};
export default Dialog;