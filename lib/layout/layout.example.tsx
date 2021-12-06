import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import Sider from "./sider";

import './layout.example.scss'

const  LayoutExample = () => {
  return(
    <div>
      <h1>layout第一个案例</h1>
      <Layout style={{height:500,width:500}}>
        <Header className='example-header'>Header</Header>
        <Content className='example-content'>Content</Content>
        <Footer className='example-footer'>Footer</Footer>
      </Layout>

      <h1>layout第二个案例</h1>
      <Layout style={{height:500,width:500}}>
        <Header className='example-header'>Header</Header>
        <Layout>
          <Sider className='example-sider'>Sider</Sider>
          <Content className='example-content'>Content</Content>
        </Layout>
        <Footer className='example-footer'>Footer</Footer>
      </Layout>

      <h1>layout第三个案例</h1>
      <Layout style={{height:500,width:500}}>
        <Header className='example-header'>Header</Header>
        <Layout>
          <Content className='example-content'>Content</Content>
          <Sider className='example-sider'>Sider</Sider>
        </Layout>
        <Footer className='example-footer'>Footer</Footer>
      </Layout>

      <h1>layout第四个案例</h1>
      <Layout style={{height:500,width:500}}>
        <Sider className='example-sider'>Sider</Sider>
        <Layout>
          <Header className='example-header'>Header</Header>
          <Content className='example-content'>Content</Content>
          <Footer className='example-footer'>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutExample