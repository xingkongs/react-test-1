import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.exampe";
import {Layout, Aside, Header, Content, Footer} from "./lib/layout/layout";
import "./example.scss";
const logo = require("./logo.png");
ReactDOM.render(
    <Router>
        <Layout className="page">
            <Header className="page-header">
                <div className="wrapped">
                    <img width="40" height="40" className="header-logo" src={logo} alt=""/>
                    XRUI
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
                    </ul>
                </Aside>
                <Content className="page-content">
                    <Route exact path="/" component={IconExample}/> <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/> <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className="page-footer">
                <div className="wrapped">&copy; xingkongs</div>
            </Footer>
        </Layout>
    </Router>,
    document.querySelector("#root")
);