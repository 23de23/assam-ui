import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,NavLink,Route} from 'react-router-dom'

import Introduce from './lib/page.example/introduce'
import StartUsing from "./lib/page.example/startUsing"
import ColorMatching from "./lib/page.example/colorMatching"
import ZIndex from "./lib/page.example/zIndx"
import IconExample from './lib/icon/icon.example'
import DialogExample from './lib/dialog/dialog.Example'
import ButtonExample from './lib/button/button.example'
import FormExample from './lib/form/form.example'
import LayoutExample from './lib/layout/layout.example'
import {Layout,Header,Sider,Content} from './lib/layout/layout'
import InputExample from './lib/input/input.example'
import ScrollExample from './lib/scroll/scroll.example'
import TreeExample from './lib/tree/tree.example'
import MessageExample from './lib/message/message.example'


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
                    <ul>
                        <li>
                            <NavLink to='/introduce'>介绍</NavLink>
                        </li>
                        <li>
                            <NavLink to='/startUsing'>开始使用</NavLink>
                        </li>
                        <li>
                            <NavLink to='/colorMatching'>色彩搭配</NavLink>
                        </li>
                        <li>
                            <NavLink to='/zIndex'>层级规范</NavLink>
                        </li>
                    </ul>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to='/icon'>Icon 图标</NavLink>
                        </li>
                        <li>
                            <NavLink to='/button'>Button 按钮</NavLink>
                        </li>
                        <li>
                            <NavLink to='/input'>Input 输入框</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dialog'>Dialog 弹出框</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>Layout 布局</NavLink>
                        </li>
                        <li>
                            <NavLink to='/form'>Form 表单</NavLink>
                        </li>
                        <li>
                            <NavLink to='/scroll'>Croll 滚动</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tree'>Tree 树形控件</NavLink>
                        </li>
                        <li>
                            <NavLink to='/message'>Message 全局提示</NavLink>
                        </li>
                    </ul>
                </Sider>
                <Content className='global-content'>
					<Route path="/introduce" component={Introduce}/>
					<Route path="/startUsing" component={StartUsing}/>
					<Route path="/colorMatching" component={ColorMatching}/>
					<Route path="/zIndex" component={ZIndex}/>
					<Route path="/icon" component={IconExample}/>
					<Route path="/button" component={ButtonExample}/>
					<Route path="/dialog" component={DialogExample}/>
					<Route path="/Layout" component={LayoutExample}/>
					<Route path="/Form" component={FormExample}/>
					<Route path="/Input" component={InputExample}/>
					<Route path="/scroll" component={ScrollExample}/>
					<Route path="/tree" component={TreeExample}/>
					<Route path="/message" component={MessageExample}/>
                </Content>
            </Layout>
            <Footer className='global-footer'>
                &copy; 爱喝阿萨姆的人
            </Footer>
        </Layout>
    </Router>
),document.getElementById('root'))
