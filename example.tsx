import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Link,Route} from 'react-router-dom'

import IconExample from './lib/icon/icon.Example'
import DialogExample from './lib/dialog/dialog.Example'
import ButtonExample from './lib/button/button.example'
import LayoutExample from './lib/layout/layout.example'
import Layout from './lib/layout/layout'
import Header from './lib/layout/header'
import Sider from './lib/layout/sider'
import Content from './lib/layout/content'

import './example.scss'
import Footer from './lib/layout/footer'
const logo = require('./logo.png')

ReactDOM.render((
    <Router>
        <Layout className='global-page'>
            <Header className='global-header'>
                <div className="logo">
                    <img src={logo.default}></img>
                    <span>assam</span>
                </div>
            </Header>
            <Layout>
                <Sider className='global-sider'>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to='/icon'>Icon</Link>
                        </li>
                        <li>
                            <Link to='/button'>Button</Link>
                        </li>
                        <li>
                            <Link to='/dialog'>Dialog</Link>
                        </li>
                        <li>
                            <Link to='/layout'>Layout</Link>
                        </li>
                    </ul>
                </Sider>
                <Content className='global-content'>
					<Route path="/icon" component={IconExample}/>
					<Route path="/button" component={ButtonExample}/>
					<Route path="/dialog" component={DialogExample}/>
					<Route path="/Layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className='global-footer'>
                &copy; 爱喝阿萨姆的男人
            </Footer>
        </Layout>
    </Router>
),document.getElementById('root'))
