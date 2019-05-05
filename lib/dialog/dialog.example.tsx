const dialogExample = () => {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={()=>{setX(!x)}}>click me</button>
            <Dialog visible={x}>
                <div>dialog</div>
            </Dialog>
        </div>
    );
};
import React, {useState} from "react";
import Dialog from "./dialog";
export default dialogExample;