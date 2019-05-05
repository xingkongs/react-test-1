import Button from "../button/button";
const dialogExample = () => {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    return (
        <div>
            <div>
                <h3>例1</h3>
                <button onClick={() => {setX(!x);}}>click me</button>
                <Dialog visible={x} buttons={[
                    <Button value="ok" onClick={() => setX(false)}/>,
                    <Button value="cancle" onClick={() => {setX(false);}}/>
                ]} onClose={() => {setX(false);}}>
                    <div>dialog</div>
                </Dialog>
            </div>
            <div>
                <h3>例2</h3>
                <button onClick={() => {setY(!y);}}>click me</button>
                <Dialog closeOnClickMask={true} visible={y} buttons={[
                    <Button value="ok" onClick={() => setY(false)}/>,
                    <Button value="cancle" onClick={() => {setY(false);}}/>
                ]} onClose={() => {setY(false);}}>
                    <div>dialog</div>
                </Dialog>
            </div>
        </div>
    );
};
import React, {useState} from "react";
import Dialog from "./dialog";
export default dialogExample;