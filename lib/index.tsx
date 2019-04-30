import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import Icon from "./icon/icon.example";
import ButtonExample from "./button/button.example";
ReactDOM.render(
    <Router>
        <div>
            <header>
                XRUI
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li><Link to="/icon">Icon</Link></li>
                        <li><Link to="/button">Button</Link></li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={Icon}/> <Route path="/button" component={ButtonExample}/>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector("#root")
);