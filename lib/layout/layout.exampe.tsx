import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
export default () => {
    return (
        <div>
            <h3>第一个例子</h3>
            <Layout className="hi" style={{height:500}}> <Header>header</Header> <Content>content</Content> <Footer>footer</Footer> </Layout>
        </div>
    );
};
