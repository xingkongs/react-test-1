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
    const [barTop, _setBarTop] = useState(0);
    const setBarTop = (number: number) => {
        const {current} = containRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const maxScrollTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number < 0) {return;}
        if (number > maxScrollTop) {return;}
        _setBarTop(number);
    };
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
    const draggingRef = useRef(false);
    const firstYRef = useRef(0);
    const firstBarTopRef = useRef(0);
    const onMouseDownBar: MouseEventHandler = (e) => {
        draggingRef.current = true;
        console.log(e.clientY);
        firstYRef.current = e.clientY;
        firstBarTopRef.current = barTop;
    };
    const onMouseUpBar = () => {
        draggingRef.current = false;
    };
    const onMouseMoveBar = (e: MouseEvent) => {
        if (draggingRef.current) {
            const delta = e.clientY - firstYRef.current;
            const newBarTop = delta + firstBarTopRef.current;
            setBarTop(newBarTop);
            const scrollHeight = containRef.current!.scrollHeight;
            const viewHeight = containRef.current!.getBoundingClientRect().height;
            containRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
        }
    };
    const onSelectStart = (e: Event) => {
        if (draggingRef.current) {
            e.preventDefault();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseup", onMouseUpBar);
        document.addEventListener("mousemove", onMouseMoveBar);
        document.addEventListener("selectstart", onSelectStart);
        return () => {
            document.removeEventListener("mouseup", onMouseUpBar);
            document.removeEventListener("mousemove", onMouseMoveBar);
            document.removeEventListener("selectstart", onSelectStart);
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
