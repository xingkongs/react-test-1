import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
export default () => {
    return (
        <div>
            <div>
                <h3>第一个例子</h3>
                <Layout className="hi" style={{width: 400, height: 300}}>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h3>第二个例子</h3>
                <Layout className="hi" style={{width: 400, height: 300}}>
                    <Header>header</Header>
                    <Layout>
                        <Aside>aside</Aside>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h3>第三个例子</h3>
                <Layout className="hi" style={{width: 400, height: 300}}>
                    <Header>header</Header>
                    <Layout>
                        <Content>content</Content>
                        <Aside>aside</Aside>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h3>第四个例子</h3>
                <Layout style={{width: 400, height: 300}}>
                    <Aside>aside</Aside>
                    <Layout className="hi">
                        <Header>header</Header>
                        <Content>content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};
