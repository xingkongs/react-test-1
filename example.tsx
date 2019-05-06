import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from "react-router-dom";
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
                    <img className="header-logo" src={logo} alt=""/>
                    XRUI
                </div>
            </Header>
            <Layout>
                <Aside className="page-aside">
                    <h2>组件</h2>
                    <ul>
                        <li><Link to="/icon">Icon</Link></li>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/dialog">Dialog</Link></li>
                        <li><Link to="/layout">Layout</Link></li>
                    </ul>
                </Aside>
                <Content className="page-content">
                    <Route exact path="/" component={IconExample}/> <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/> <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className="page-footer">
                <div className="wrapped">footer</div>
            </Footer>
        </Layout>
    </Router>,
    document.querySelector("#root")
);