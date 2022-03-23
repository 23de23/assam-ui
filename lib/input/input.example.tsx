import React from "react"

import CodeBox from "../component.example/codeBox"
import ApiBox from "../component.example/apiBox"
import InputExample1,{inputExample1_codeString} from "./input.example1"
import InputExample2,{inputExample2_codeString} from "./input.example2"
import InputExample3,{inputExample3_codeString} from "./input.example3"
import InputExample4,{inputExample4_codeString} from "./input.example4"
import InputExample5,{inputExample5_codeString} from "./input.example5"
import './input.example.scss'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-button')
const apiArry = [
    {attribute:'placeholder',content:'	原生属性',type:'string',default:'——'},
    {attribute:'addonBefore	',content:'	带标签的 input，设置前置标签',type:'string | ReactNode',default:'——'},
    {attribute:'addonAfter',content:'带标签的 input，设置后置标签',type:'string | ReactNode',default:'——'},
    {attribute:'value',content:'输入框内容',type:'string',default:'——'},
    {attribute:'defaultValue',content:'带标签的 输入框默认内容',type:'string',default:'——'},
    {attribute:'prefix',content:'带有前缀图标的 input',type:'string | ReactNode',default:'——'},
    {attribute:'suffix',content:'带有后缀图标的 input',type:'string | ReactNode',default:'——'},
    {attribute:'disabled',content:'是否禁用状态，默认为 false',type:'boolean',default:'false'},
    {attribute:'type',content:'声明 input 类型，同原生 input 标签的 type 属性',type:'string',default:'——'},
    {attribute:'onChange',content:'输入框内容变化时的回调',type:'function(e)',default:'——'},
    {attribute:'onPressEnter',content:'按下回车的回调',type:'function(e)',default:'——'},
    {attribute:'onFocus',content:'聚焦时的回调',type:'function(e)',default:'——'},
    {attribute:'onBlur',content:'失去焦点时的回调',type:'function(e)',default:'——'},
    {attribute:'className',content:'自定义输入框外层容器类名',type:'string',default:'——'},
    {attribute:'style',content:'自定义输入框样式',type:'React.CSSProperties',default:'——'},
]

 const InputExample:React.FunctionComponent = ()=>{
    return(
        <div className={sc('')}>
            <section>
                <h1>Input 输入框</h1>
                <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <ul style={{listStyleType:"circle",marginLeft:20}}>
                    <li><p>需要用户输入表单域内容时。</p></li>
                    <li><p>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</p></li>
                </ul>
            </section>
            <section>
                <h2>代码演示</h2>
            </section>
            <CodeBox
                title="基本使用"
                text="基本使用。"
                egComponent={InputExample1}
                code={inputExample1_codeString}
            />
            <CodeBox
                title="三种大小"
                text="为 <Input /> 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。"
                egComponent={InputExample2}
                code={inputExample2_codeString}
            />
            <CodeBox
                title="前缀和后缀"
                text="在输入框上添加前缀或后缀图标。"
                egComponent={InputExample3}
                code={inputExample3_codeString}
            />
            <CodeBox
                title="前置 / 后置标签"
                text="用于配置一些固定组合。"
                egComponent={InputExample4}
                code={inputExample4_codeString}
            />
            <CodeBox
                title="禁用"
                text="禁用状态。"
                egComponent={InputExample5}
                code={inputExample5_codeString}
            />
            <ApiBox data={apiArry}></ApiBox>
        </div>
    )
}

export default InputExample
