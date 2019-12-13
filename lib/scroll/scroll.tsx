import React, {UIEventHandler, MouseEventHandler, useState, useRef, useEffect} from "react";
import {scopedClassMaker} from "../helpers/classes";
import "./scroll.scss";
import scrollbarWidth from "./scroll-width";
interface HTMLAttributes<HTMLDivElement> {
    style: { [key: string]: any }
}
interface Props extends HTMLAttributes<HTMLDivElement> {
}
const sc = scopedClassMaker("xrui-scroll");
const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...reset} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, setBarTop] = useState(0);
    let onScroll: UIEventHandler = (e) => {
        const {current} = containRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const scrollTop = current!.scrollTop;
        setBarTop(scrollTop * viewHeight / scrollHeight);
    };
    useEffect(() => {
        const scrollHeight = containRef.current!.scrollHeight;
        const viewHeight = containRef.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
    }, []);
    const containRef = useRef<HTMLDivElement>(null);
    const daggerRef = useRef(false);
    const firstYRef = useRef(0);
    const firstBarTopRef = useRef(0);
    const onMouseDownBar: MouseEventHandler = (e) => {
        daggerRef.current = true;
        console.log(e.clientY);
        firstYRef.current = e.clientY;
        firstBarTopRef.current = barTop;
    };
    const onMouseUpBar = () => {
        daggerRef.current = false;
    };
    const onMouseMoveBar = (e: MouseEvent) => {
        if (daggerRef.current) {
            const delta = e.clientY - firstYRef.current;
            setBarTop(delta + firstBarTopRef.current);
        }
    };
    useEffect(() => {
        document.addEventListener("mouseup", onMouseUpBar);
        document.addEventListener("mousemove", onMouseMoveBar);
        return () => {
            document.removeEventListener("mouseup", onMouseUpBar);
            document.removeEventListener("mousemove", onMouseMoveBar);
        };
    }, []);
    return (
        <div className={sc("")} {...reset}>
            <div className={sc("inner")} style={{right: -scrollbarWidth()}} ref={containRef} onScroll={onScroll}>
                {children}
            </div>
            <div className={sc("track")}>
                <div className={sc("bar")} onMouseDown={onMouseDownBar} style={{
                    height: barHeight,
                    transform: `translateY(${barTop}px)`
                }}/>
            </div>
        </div>
    );
};
export default Scroll;
