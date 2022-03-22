import React from "react"

import CodeBox from "../component.example/codeBox"
import ApiBox from "../component.example/apiBox"
import InputExample1,{inputExample1_codeString} from "./input.example1"
import InputExample2,{inputExample2_codeString} from "./input.example2"
import InputExample3,{inputExample3_codeString} from "./input.example3"
import './input.example.scss'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-button')
const apiArry = [
    {attribute:'icon',content:'	内嵌 Icon 图标的 name 属性',type:'string',default:'——'},
    {attribute:'position',content:'内嵌 Icon 图标的位置',type:"'left' | 'right'",default:"'left'"},
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
            <ApiBox data={apiArry}></ApiBox>
        </div>
    )
}

export default InputExample
