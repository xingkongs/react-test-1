import React, {Fragment, useState} from "react";
import "./button.scss";
interface Props extends React.DOMAttributes<React.ReactNode>{
    value:string
}
const Button:React.FunctionComponent<Props> = ({value}) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [buttonActive, setButtonActive] = useState(false);
    const buttonRef: any = React.createRef();
    let onClick = (e: any) => {
        let {left, top} = buttonRef.current.getBoundingClientRect();
        const buttonX = e.clientX;
        const buttonY = e.clientY;
        setButtonActive(true);
        setLeft(buttonX - left - 5);
        setTop(buttonY - top - 5);
    };
    const onEnd = () => {
        setButtonActive(false);
    };
    return (
        <Fragment>
            <button ref={buttonRef} className="xrui-button" onClick={onClick} onAnimationEnd={onEnd}>
                <span className="xrui-button_content">{value}</span> {buttonActive ?
                <span className="xrui-button_span" style={{left: left, top: top}}/> : ""}
            </button>
        </Fragment>
    );
};
export default Button;