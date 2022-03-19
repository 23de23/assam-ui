import React from "react"

import CodeBox from "../component.example/codeBox"
import ApiBox from "../component.example/apiBox"
import ScrollExample1,{scrollExample1_codeString} from "./scroll.example1"


import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-button')
const apiArry = [
    {attribute:'className',content:'自定义外层容器类名',type:'string',default:'———'},
    {attribute:'style',content:'自定义外层容器样式',type:'React.CSSProperties',default:'———'},
    {attribute:'trackClassName',content:'自定义滚动条滑块轨道容器类名',type:'string',default:'———'},
    {attribute:'trackStyle',content:'自定义滚动条滑块轨道容器样式',type:'React.CSSProperties',default:'———'},
    {attribute:'scroollBarClassName',content:'自定义滚动条滑块类名',type:'string',default:'———'},
    {attribute:'scrollBarStyle',content:'自定义滚动条滑块样式',type:'React.CSSProperties',default:'———'},
]

 const ButtonExample:React.FunctionComponent = ()=>{
    return(
        <div className={sc('')}>
            <section>
                <h1>Scroll 滚动条</h1>
                <p>自定义滚动条。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p>当需要使用自定义滚动条代替浏览器自带滚动条时。</p>
            </section>
            <section>
                <h2>代码演示</h2>
            </section>
            <CodeBox
                title="基本用法"
                text="最基本的用法。"
                egComponent={ScrollExample1}
                code={scrollExample1_codeString}
            />
            <ApiBox data={apiArry}></ApiBox>
        </div>
    )
}

export default ButtonExample
