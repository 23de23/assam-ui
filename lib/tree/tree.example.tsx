import React from "react"

import CodeBox from "../component.example/codeBox"
import ApiBox from "../component.example/apiBox"
import TreeExample1,{treeExample1_codeString} from "./tree.example1"
import TreeExample2,{treeExample2_codeString} from "./tree.example2"


import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-button')
const apiArry = [
    {attribute:'icon',content:'	内嵌 Icon 图标的 name 属性',type:'string',default:'——'},
    {attribute:'position',content:'内嵌 Icon 图标的位置',type:"'left' | 'right'",default:"'left'"},
]

 const ButtonExample:React.FunctionComponent = ()=>{
    return(
        <div className={sc('')}>
            <section>
                <h1>Tree树形控件</h1>
                <p>多层次的结构列表。</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
            </section>
            <section>
                <h2>代码演示</h2>
            </section>
            <CodeBox
                title="基本"
                text="最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"
                egComponent={TreeExample1}
                code={treeExample1_codeString}
            />
            <CodeBox
                title="单选"
                text="multiple 模式支持复选。"
                egComponent={TreeExample2}
                code={treeExample2_codeString}
            />
            <ApiBox data={apiArry}></ApiBox>
        </div>
    )
}

export default ButtonExample
