import React from "react";
import './importIcons.js'
import './icon.scss'
import classes from '../helpers/classes'

//TS的接口设置
interface IconProps extends React.SVGAttributes<SVGElement> { 
    name : string
}


// React.FunctionComponent<IconProps> 定义类型react函数类组件 并且参数要求为接口 iconProps
const  Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,name,...restProps} = props
    return (
        <svg className={classes('fui-icon',className)} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
}

export default Icon

// 隐藏bug 
// 1、当使用组件时传入className = "qq"时 {...props}会对其进行注册而挤掉fui-icon