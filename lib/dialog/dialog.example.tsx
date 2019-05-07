import React, {useState} from "react";
import Dialog, {alert, confirm, modal} from "./dialog";
import Button from "../button/button";
const DialogExample = () => {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    const openModal = () => {
        const close = modal(<h1>hi<Button onClick={() => {close();}} value="close"/></h1>);
    };
    return (
        <div>
            <div>
                <h3>例1</h3>
                <Button onClick={() => {setX(!x);}} value="click me"/>
                <Dialog visible={x} title="标题" enableMask={false} buttons={[
                    <Button value="ok" onClick={() => setX(false)}/>,
                    <Button value="cancle" onClick={() => {setX(false);}}/>
                ]} onClose={() => {setX(false);}}>
                    <div>dialog</div>
                </Dialog>
            </div>
            <div>
                <h3>例2</h3>
                <Button onClick={() => {setY(!y);}} value="click me"/>
                <Dialog closeOnClickMask={true} visible={y} buttons={[
                    <Button value="ok" onClick={() => setY(false)}/>,
                    <Button value="cancle" onClick={() => {setY(false);}}/>
                ]} onClose={() => {setY(false);}}>
                    <div>dialog</div>
                </Dialog>
            </div>
            <div>
                <h3>例3</h3>
                <Button onClick={() => {alert("1");}} value="alert"/> <Button onClick={() => {
                confirm("1", () => {
                    console.log("yes");
                }, () => {
                    console.log("no");
                });
            }} value="confirm"/> <Button onClick={() => {openModal();}} value="modal"/>
            </div>
        </div>
    );
};
export default DialogExample;