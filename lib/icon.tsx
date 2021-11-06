import React from "react";
import './importIcon.js'

//TS的接口设置
interface IconProps { 
    name : string
}

// React.FunctionComponent<IconProps> 定义类型react函数类组件 并且参数要求为接口 iconProps
const  Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg><use xlinkHref={`#${props.name}`}/></svg>
        </span>
    )
}

export default Icon
