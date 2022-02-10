import React from "react"

import Icon from './icon'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    return(
        <ul className={sc('list')}>
            <li>
                <Icon name='QQ'/>
                <span>QQ</span>
            </li>
            <li>
                <Icon name='Wechat'/>
                <span>Wechat</span>
            </li>
            <li>
                <Icon name='Alipay'/>
                <span>Alipay</span>
            </li>
            <li>
                <Icon name='Android'/>
                <div>Android</div>
            </li>
            <li>
                <Icon name='Apple'/>
                <div>Apple</div>
            </li>
            <li>
                <Icon name='Chrome'/>
                <div>Chrome</div>
            </li>
            <li>
                <Icon name='Dingtalk'/>
                <div>Dingtalk</div>
            </li>
            <li>
                <Icon name='Facebook'/>
                <div>Facebook</div>
            </li>
            <li>
                <Icon name='HTML5'/>
                <div>HTML5</div>
            </li>
            <li>
                <Icon name='Slack'/>
                <div>Slack</div>
            </li>
            <li>
                <Icon name='Weibo'/>
                <div>Weibo</div>
            </li>
            <li>
                <Icon name='Zhihu'/>
                <div>Zhihu</div>
            </li>
            <li>
                <Icon name='Amazon'/>
                <div>Amazon</div>
            </li>
            <li>
                <Icon name='Twitter'/>
                <div>Twitter</div>
            </li>
            <li>
                <Icon name='Gitlab'/>
                <div>Gitlab</div>
            </li>
            <li>
                <Icon name='Github'/>
                <div>Github</div>
            </li>
            <li>
                <Icon name='Aliwangwang'/>
                <div>Aliwangwang</div>
            </li>
        </ul>
    )
}

export default IconExample
