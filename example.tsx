import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import "./example.scss";
import {Layout, Header, Aside, Content, Footer} from "./lib/layout/layout";
import IconDemo from "./lib/icon/icon.demo";
import ButtonDemo from "./lib/button/button.demo";
import DialogDemo from "./lib/dialog/dialog.demo";
import LayoutDemo from "./lib/layout/layout.demo";
import FormDemo from "./lib/form/form.demo";
const logo = require("./logo.png");
ReactDOM.render(
    <Router>
        <Layout className="page">
            <Header className="page-header">
                <div className="wrapped">
                    <a href="./">
                        <span>
                            <img width="40" height="40" className="header-logo" src={logo} alt=""/>
                        XRUI
                        </span>
                    </a>
                </div>
            </Header>
            <Layout>
                <Aside className="page-aside">
                    <h2>组件</h2>
                    <ul>
                        <li><NavLink to="/icon">Icon</NavLink></li>
                        <li><NavLink to="/button">Button</NavLink></li>
                        <li><NavLink to="/dialog">Dialog</NavLink></li>
                        <li><NavLink to="/layout">Layout</NavLink></li>
                        <li><NavLink to="/form">Form</NavLink></li>
                    </ul>
                </Aside>
                <Content className="page-content">
                    <Route exact path="/" component={IconDemo}/>
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={ButtonDemo}/>
                    <Route path="/dialog" component={DialogDemo}/>
                    <Route path="/layout" component={LayoutDemo}/>
                    <Route path="/form" component={FormDemo}/>
                </Content>
            </Layout>
            <Footer className="page-footer">
                <div className="wrapped">&copy; xingkongs</div>
            </Footer>
        </Layout>
    </Router>,
    document.querySelector("#root")
);