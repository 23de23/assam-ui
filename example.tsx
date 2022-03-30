import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,NavLink,Redirect,Route} from 'react-router-dom'

import Introduce from './lib/page.example/introduce'
import StartUsing from "./lib/page.example/startUsing"
import ColorMatching from "./lib/page.example/colorMatching"
import ZIndex from "./lib/page.example/zIndx"
import IconExample from './lib/icon/icon.example'
import ModalExample from './lib/modal/modal.Example'
import ButtonExample from './lib/button/button.example'
import FormExample from './lib/form/form.example'
import LayoutExample from './lib/layout/layout.example'
import {Layout,Header,Sider,Content} from './lib/layout/layout'
import InputExample from './lib/input/input.example'
import ScrollExample from './lib/scroll/scroll.example'
import TreeExample from './lib/tree/tree.example'
import MessageExample from './lib/message/message.example'
import TooltipExample from './lib/tooltip/tooltip.example'
import PopverExample from './lib/popover/popover.example'


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
                            <NavLink to='/introduce'>Assam</NavLink>
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
                    <ul>
                        <div className='assam-menu-item-title'>通用</div>
                        <li>
                            <NavLink to='/icon'>Icon 图标</NavLink>
                        </li>
                        <li>
                            <NavLink to='/button'>Button 按钮</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <div className='assam-menu-item-title'>布局</div>
                        <li>
                            <NavLink to='/layout'>Layout 布局</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <div className='assam-menu-item-title'>数据展示</div>
                        <li>
                            <NavLink to='/dialog'>Modal 对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to='/message'>Message 全局提示</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tooltip'>Tooltip 文字提示</NavLink>
                        </li>
                        <li>
                            <NavLink to='/popver'>Popver 气泡卡片</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tree'>Tree 树形控件</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <div className='assam-menu-item-title'>数据录入</div>
                        <li>
                            <NavLink to='/input'>Input 输入框</NavLink>
                        </li>
                        <li>
                            <NavLink to='/form'>Form 表单</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <div className='assam-menu-item-title'>其他</div>
                        <li>
                            <NavLink to='/scroll'>Scroll 滚动</NavLink>
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
					<Route path="/dialog" component={ModalExample}/>
					<Route path="/Layout" component={LayoutExample}/>
					<Route path="/Form" component={FormExample}/>
					<Route path="/Input" component={InputExample}/>
					<Route path="/scroll" component={ScrollExample}/>
					<Route path="/tree" component={TreeExample}/>
					<Route path="/message" component={MessageExample}/>
					<Route path="/tooltip" component={TooltipExample}/>
					<Route path="/popver" component={PopverExample}/>
                    <Route component={Introduce}/>



                </Content>
            </Layout>
            <Footer className='global-footer'>
                &copy; 爱喝阿萨姆的人
            </Footer>
        </Layout>
    </Router>
),document.getElementById('root'))
