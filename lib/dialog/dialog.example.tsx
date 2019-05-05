import Button from "../button/button";
const dialogExample = () => {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => {setX(!x);}}>click me</button>
            <Dialog visible={x} buttons={[
                <Button value="ok" onClick={() => setX(false)}/>,
                <Button value="cancle" onClick={() => {setX(false);}}/>
            ]} onClose={() => {setX(false);}}>
                <div>dialog</div>
            </Dialog>
        </div>
    );
};
import React, {useState} from "react";
import Dialog from "./dialog";
export default dialogExample;