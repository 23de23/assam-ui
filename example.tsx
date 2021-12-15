import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,NavLink,Route} from 'react-router-dom'

import IconCodeVisible from './lib/icon/icon.codeVisible'
import DialogExample from './lib/dialog/dialog.Example'
import ButtonExample from './lib/button/button.example'
import FormExample from './lib/form/form.example'
import LayoutExample from './lib/layout/layout.example'
import {Layout,Header,Sider,Content} from './lib/layout/layout'
import InputExample from './lib/input/input.example'
import ScrollExample from './lib/scroll/scroll.example'


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
                            <NavLink to='/input'>Input</NavLink>
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
                        <li>
                            <NavLink to='/scroll'>croll</NavLink>
                        </li>
                    </ul>
                </Sider>
                <Content className='global-content'>
					<Route path="/icon" component={IconCodeVisible}/>
					<Route path="/button" component={ButtonExample}/>
					<Route path="/dialog" component={DialogExample}/>
					<Route path="/Layout" component={LayoutExample}/>
					<Route path="/Form" component={FormExample}/>
					<Route path="/Input" component={InputExample}/>
					<Route path="/scroll" component={ScrollExample}/>
                </Content>
            </Layout>
            <Footer className='global-footer'>
                &copy; 爱喝阿萨姆的男人
            </Footer>
        </Layout>
    </Router>
),document.getElementById('root'))
