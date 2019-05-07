import React, {useState} from "react";
import Highlight, {defaultProps} from "prism-react-renderer";
import Button from "./button/button";
interface Props {
    code: string
}
const Middleware: React.FunctionComponent<Props> = (props) => {
    const [x, setX] = useState(false);
    const onToggle = () => {
        setX(!x);
    };
    return (
        <div className="middleware">
            {props.children}
            <Button onClick={onToggle} value="源码"/>
            {x && <Highlight {...defaultProps} code={props.code} language="jsx">
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({line, key: i})}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({token, key})} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>}
        </div>
    );
};
export default Middleware;