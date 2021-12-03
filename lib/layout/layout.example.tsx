import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import Sider from "./sider";

const  LayoutExample = () => {
  return(
    <div>
      <h1>layout第一个案例</h1>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>

      <h1>layout第二个案例</h1>
      <Layout>
        <Header></Header>
        <Layout>
          <Sider></Sider>
          <Content></Content>
        </Layout>
        <Footer></Footer>
      </Layout>

      <h1>layout第三个案例</h1>
      <Layout>
        <Header></Header>
        <Layout>
          <Content></Content>
          <Sider></Sider>
        </Layout>
        <Footer></Footer>
      </Layout>

      <h1>layout第四个案例</h1>
      <Layout>
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutExample