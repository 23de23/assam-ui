import React from "react"

import Icon from './icon'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    return(
        <ul className={sc('list')}>
            {["Wechat","Alipay","Android","Apple","Chrome","Dingtalk","Facebook","HTML5","Slack","Weibo","Zhihu","Amazon","Twitter","Gitlab","Github","Aliwangwang"].map((name)=>{
                return (
                    <li key={name}>
                        <span className={sc('iconBox')}><Icon name={name}/></span>
                        <span>{name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default IconExample
