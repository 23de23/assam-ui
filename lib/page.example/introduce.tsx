import React from "react"

const introduce:React.FunctionComponent = ()=>{
  return(
    <div>
      <section>
        <h1>Assam</h1>
        <p><text><a href="https://23de23.github.io/assam-ui/" target="_blank">Assam</a> 是一套基于assam-ui的 PC 端 React 组件库，色彩、样式的设计参考了其他成熟组件库。</text></p>
      </section>

      <section>
        <h2>使用 TypeScript</h2>
        <p><text><a href="https://www.tslang.cn/" target="_blank">TypeScript</a> 提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。Assam 完全使用 TypeScript 编写，有效增强了代码的健壮性。</text></p>
      </section>

      <section>
        <h2>没有额外依赖</h2>
        <p><text>Assam 只依赖 React、ReactDOM 两个核心库以及 PropTypes 进行类型检查，没有其他外部依赖。</text></p>
      </section>
    </div>
  )
}


export default introduce