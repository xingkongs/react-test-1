import React, {Fragment, useState, useEffect} from "react";
import "./button.scss";
interface Props extends React.DOMAttributes<React.ReactNode> {
    value?: string
}
const Button: React.FunctionComponent<Props> = ({value, ...resetProps}) => {
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
    useEffect(() => {
        console.log(buttonActive, left, top);
    }, [buttonActive, left, top]);
    return (
        <Fragment>
            <button {...resetProps} ref={buttonRef} className="xrui-button" onClick={onClick} onAnimationEnd={onEnd}>
                <span className="xrui-button_content">{value}</span>{buttonActive ?
                <span className="xrui-button_span" style={{left: left, top: top}}/> : ""}
            </button>
        </Fragment>
    );
};
Button.defaultProps = {
    value: "default button"
};
Button.displayName = "XRUI-Button";
export default Button;