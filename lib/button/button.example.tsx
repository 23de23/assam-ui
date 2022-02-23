import React from "react"

import CodeBox from "../component.example/codeBox"
import ApiBox from "../component.example/apiBox"
import ButtonExample1,{ButtonExample1_codeString} from "./button.example1"
import ButtonExample2,{ButtonExample2_codeString} from "./button.example2"
import ButtonExample3,{ButtonExample3_codeString} from "./button.example3"
import ButtonExample4,{ButtonExample4_codeString} from "./button.example4"
import ButtonExample5,{ButtonExample5_codeString} from "./button.example5"

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
                <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
                <p style={{color: 'rgba(0,0,0,0.85)'}}>在 Assam 中我们提供了三种按钮。</p>
                <ul style={{listStyleType:"circle",marginLeft:20}}>
                    <li><p>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</p></li>
                    <li><p>默认按钮：用于没有主次之分的一组行动点。</p></li>
                    <li><p>虚线按钮：常用于添加操作。</p></li>
                </ul>
                <p style={{color: 'rgba(0,0,0,0.85)'}}>以及四种状态属性与上面配合使用。</p>
                <ul style={{listStyleType:"circle",marginLeft:20}}>
                    <li><p>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</p></li>
                    <li><p>幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。</p></li>
                    <li><p>禁用：行动点不可用的时候，一般需要文案解释。</p></li>
                    <li><p>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</p></li>
                </ul>
            </section>
            <section>
                <h2>代码演示</h2>
            </section>
            <CodeBox
                title="按钮类型"
                text="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
                egComponent={ButtonExample1}
                code={ButtonExample1_codeString}
            />
            <CodeBox
                title="Disabled 和 Loading 状态"
                text="设置按钮的禁用和加载中状态。"
                egComponent={ButtonExample2}
                code={ButtonExample2_codeString}
            />
            <CodeBox
                title="Icon 图标"
                text="设置内嵌 Icon 图标和位置。"
                egComponent={ButtonExample3}
                code={ButtonExample3_codeString}
            />
            <CodeBox
                title="幽灵按钮"
                text="幽灵按钮常用在有色背景上。"
                egComponent={ButtonExample4}
                bgc="#bec8c8"
                code={ButtonExample4_codeString}
            />
            <CodeBox
                title="按钮尺寸"
                text="按钮有大、中、小三种尺寸。点击以查看对应尺寸的效果。"
                egComponent={ButtonExample5}
                code={ButtonExample5_codeString}
            />
            <ApiBox data={apiArry}></ApiBox>
        </div>
    )
}

export default ButtonExample
