import React from "react";
interface Props {
    code: string
}
const Middleware: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.children}
            <pre>
                {props.code}
            </pre>
        </div>
    );
};
export default Middleware;