import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import Sider from "./sider";


const  LayoutExample1 = () => {
  return(
    <div style={{width:'100%'}}>
      <h2>layout第一个案例</h2>
      <Layout>
        <Header className='example-header'>Header</Header>
        <Content className='example-content'>Content</Content>
        <Footer className='example-footer'>Footer</Footer>
      </Layout>

      <h2>layout第二个案例</h2>
      <Layout>
        <Header className='example-header'>Header</Header>
        <Layout>
          <Sider className='example-sider'>Sider</Sider>
          <Content className='example-content'>Content</Content>
        </Layout>
        <Footer className='example-footer'>Footer</Footer>
      </Layout>

      <h2>layout第三个案例</h2>
      <Layout>
        <Header className='example-header'>Header</Header>
        <Layout>
          <Content className='example-content'>Content</Content>
          <Sider className='example-sider'>Sider</Sider>
        </Layout>
        <Footer className='example-footer'>Footer</Footer>
      </Layout>

      <h2>layout第四个案例</h2>
      <Layout>
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

const LayoutExample1_codeString = `
          <h2>layout第一个案例</h2>
          <Layout>
            <Header className='example-header'>Header</Header>
            <Content className='example-content'>Content</Content>
            <Footer className='example-footer'>Footer</Footer>
          </Layout>

          <h2>layout第二个案例</h2>
          <Layout>
            <Header className='example-header'>Header</Header>
            <Layout>
              <Sider className='example-sider'>Sider</Sider>
              <Content className='example-content'>Content</Content>
            </Layout>
            <Footer className='example-footer'>Footer</Footer>
          </Layout>

          <h2>layout第三个案例</h2>
          <Layout>
            <Header className='example-header'>Header</Header>
            <Layout>
              <Content className='example-content'>Content</Content>
              <Sider className='example-sider'>Sider</Sider>
            </Layout>
            <Footer className='example-footer'>Footer</Footer>
          </Layout>

          <h2>layout第四个案例</h2>
          <Layout>
            <Sider className='example-sider'>Sider</Sider>
            <Layout>
              <Header className='example-header'>Header</Header>
              <Content className='example-content'>Content</Content>
              <Footer className='example-footer'>Footer</Footer>
            </Layout>
          </Layout>
`

export default LayoutExample1
export {LayoutExample1_codeString}