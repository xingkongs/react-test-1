import React from "react";
import "./importAllIcons"
import './icon.scss'
interface IconProps {
    name: string
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg className="xrui-icon">
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    );
};
export default Icon;