import React, {UIEventHandler, useState, useRef, useEffect} from "react";
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
    const containRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scrollHeight = containRef.current!.scrollHeight;
        const viewHeight = containRef.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
    }, []);
    return (
        <div className={sc("")} {...reset}>
            <div className={sc("inner")} style={{right: -scrollbarWidth()}} ref={containRef} onScroll={onScroll}>
                {children}
            </div>
            <div className={sc("track")}>
                <div className={sc("bar")} style={{height: barHeight, transform: `translateY(${barTop}px)`}}/>
            </div>
        </div>
    );
};
export default Scroll;
