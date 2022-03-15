import React from "react";
import LayoutExample1, {LayoutExample1_codeString} from './layout.example1'
import CodeBox from "../component.example/codeBox"

import './layout.example.scss'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-layout')

const  LayoutExample = () => {
  return(
    <div className={sc('')}>
      <section>
          <h1>Layout 布局</h1>
          <p>协助进行页面级整体布局。</p>
      </section>
      <section>
          <h2>组件概述</h2>
          <ul style={{listStyleType:"circle",marginLeft:20}}>
              <li><p>Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。</p></li>
              <li><p>Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p></li>
              <li><p>Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</p></li>
              <li><p>Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p></li>
              <li><p>Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p></li>
              <li><p>注意：采用 flex 布局实现，请注意浏览器兼容性问题。</p></li>
          </ul>
      </section>
      <section>
          <h2>代码演示</h2>
      </section>
      <CodeBox
          title="基本结构"
          text="典型的页面布局。"
          egComponent={LayoutExample1}
          code={LayoutExample1_codeString}
      />
    </div>
  )
}

export default LayoutExample