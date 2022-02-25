import React from "react"

import Icon from './icon'
import message from "../message/message"
import {copyToClip} from '../helpers/utils'


import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    const handlClick = (name:string)=>{
        return (
            ()=>{
                copyToClip(`<icon name={${name}}/>  copied`)
                message.success({
                    content:`<icon name={${name}}/>  copied`
                })
            }
        )
    }
    return(
        <ul className={sc('list')}>
            {["Wechat","Alipay","Android","Apple","Chrome","Dingtalk","Facebook","HTML5","Slack","Weibo","Zhihu","Amazon","Twitter","Gitlab","Github","Aliwangwang"].map((name)=>{
                return (
                    <li key={name} onClick={handlClick(name)}>
                        <span className={sc('iconBox')}><Icon name={name}/></span>
                        <span>{name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default IconExample
