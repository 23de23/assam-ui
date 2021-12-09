import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,NavLink,Route} from 'react-router-dom'

import IconCodeVisible from './lib/icon/icon.codeVisible'
import DialogExample from './lib/dialog/dialog.Example'
import ButtonExample from './lib/button/button.example'
import FormExample from './lib/form/form.example'
import LayoutExample from './lib/layout/layout.example'
import {Layout,Header,Sider,Content} from './lib/layout/layout'


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
                            <NavLink to='/icon'>Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to='/button'>Button</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dialog'>Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to='/form'>Form</NavLink>
                        </li>
                    </ul>
                </Sider>
                <Content className='global-content'>
					<Route path="/icon" component={IconCodeVisible}/>
					<Route path="/button" component={ButtonExample}/>
					<Route path="/dialog" component={DialogExample}/>
					<Route path="/Layout" component={LayoutExample}/>
					<Route path="/Form" component={FormExample}/>
                </Content>
            </Layout>
            <Footer className='global-footer'>
                &copy; 爱喝阿萨姆的男人
            </Footer>
        </Layout>
    </Router>
),document.getElementById('root'))
