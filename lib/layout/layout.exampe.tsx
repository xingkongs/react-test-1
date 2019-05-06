import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import "./layout.example.scss";
export default () => {
    return (
        <div>
            <div>
                <h3>第一个例子</h3>
                <Layout className="hi" style={{width: 500, height: 300}}>
                    <Header className="x">header</Header>
                    <Content className="y">content</Content>
                    <Footer className="x">footer</Footer>
                </Layout>
            </div>
            <div>
                <h3>第二个例子</h3>
                <Layout className="hi" style={{width: 500, height: 300}}>
                    <Header className="x">header</Header>
                    <Layout>
                        <Aside className="z">aside</Aside>
                        <Content className="y">content</Content>
                    </Layout>
                    <Footer className="x">footer</Footer>
                </Layout>
            </div>
            <div>
                <h3>第三个例子</h3>
                <Layout className="hi" style={{width: 500, height: 300}}>
                    <Header className="x">header</Header>
                    <Layout>
                        <Content className="y">content</Content>
                        <Aside className="z">aside</Aside>
                    </Layout>
                    <Footer className="x">footer</Footer>
                </Layout>
            </div>
            <div>
                <h3>第四个例子</h3>
                <Layout style={{width: 500, height: 300}}>
                    <Aside className="z">aside</Aside>
                    <Layout className="hi">
                        <Header className="x">header</Header>
                        <Content className="y">content</Content>
                        <Footer className="x">footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};
