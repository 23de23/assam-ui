import React from "react"

import CodeBox from "../component.example/CodeBox"
import ApiBox from "../component.example/apiBox"
import ButtonExample1 from "./button.example1"
import ButtonExample2 from "./button.example2"
import ButtonExample3 from "./button.example3"
import ButtonExample4 from "./button.example4"
import ButtonExample5 from "./button.example5"

import './button.example.scss'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-button')
const apiArry = [
                    {attribute:'icon',content:'	内嵌 Icon 图标的 name 属性',type:'string',default:'——'},
                    {attribute:'position',content:'内嵌 Icon 图标的位置',type:"'left' | 'right'",default:"'left'"},
                    {attribute:'type',content:'不同样式风格的按钮',type:"	'default' | 'dashed' | 'primary' | 'danger'",default:"'default'"},
                    {attribute:'size',content:'按钮的尺寸',type:"'small' | 'medium' | 'large'",default:"'medium'"},
                    {attribute:'loading',content:'加载中状态',type:"boolean",default:"false"},
                    {attribute:'disabled',content:'禁用状态',type:"boolean",default:"false"},
                    {attribute:'ghost',content:'幽灵按钮',type:"boolean",default:"false"},
                    {attribute:'className',content:'自定义 Button 类名',type:"string",default:"——"},
                    {attribute:'style',content:'自定义 Button 样式',type:"React.CSSProperties",default:"——"},
                ]

 const ButtonExample:React.FunctionComponent = ()=>{
    return(
        <div className={sc('')}>
            <section>
                <h1>Button 按钮</h1>
                <p>点击以开始即时操作。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p>响应用户点击行为，触发相应业务逻辑。</p>
            </section>
            <section>
                <h2>代码演示</h2>
            </section>
            <CodeBox
                title="按钮类型"
                text="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
                egComponent={ButtonExample1}
            />
            <CodeBox
                title="Disabled 和 Loading 状态"
                text="设置按钮的禁用和加载中状态。"
                egComponent={ButtonExample2}
            />
            <CodeBox
                title="Icon 图标"
                text="设置内嵌 Icon 图标和位置。"
                egComponent={ButtonExample3}
            />
            <CodeBox
                title="幽灵按钮"
                text="幽灵按钮常用在有色背景上。"
                egComponent={ButtonExample4}
                bgc="#bec8c8"
            />
            <CodeBox
                title="按钮尺寸"
                text="按钮有大、中、小三种尺寸。点击以查看对应尺寸的效果。"
                egComponent={ButtonExample5}
            />
            <ApiBox data={apiArry}></ApiBox>
        </div>
    )
}

export default ButtonExample
