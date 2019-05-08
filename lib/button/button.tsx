import React, {Fragment, useState} from "react";
import "./button.scss";
interface Props extends React.DOMAttributes<React.ReactNode> {
    value?: string,
    type?: "submit" | "button" | "reset",
    disabled?: boolean,
    iconPosition?: "left" | "right"
}
const Button: React.FunctionComponent<Props> = ({value, children, iconPosition, ...resetProps}) => {
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
    // useEffect(() => {
    //     console.log(buttonActive, left, top);
    // }, [buttonActive, left, top]);
    return (
        <Fragment>
            <button {...resetProps} ref={buttonRef} className="xrui-button" onMouseDown={onClick} onAnimationEnd={onEnd}>
                {iconPosition === "right" ?
                    <span className="xrui-button_content">{value}{children}</span> :
                    <span className="xrui-button_content">{children}{value}</span>
                }
                {buttonActive ? <span className="xrui-button_span" style={{left: left, top: top}}/> : ""}
            </button>
        </Fragment>
    );
};
Button.defaultProps = {
    value: "default button"
};
Button.displayName = "XRUI-Button";
export default Button;