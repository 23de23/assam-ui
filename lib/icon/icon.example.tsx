import React from "react"

import Example1 from './icon.example1'
import Example2 from './icon.example2'
import Example3 from './icon.example3'

import './icon.example.scss'

import { scopedClassMaker } from "../helpers/classes"
import IconCodeVisible from "./icon.codeVisible"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    return(
      <div className={sc('')}>
        <section>
          <h1>Pager 分页</h1>
          <p>
              语义化的矢量图形。点击示例即可直接使用图标组件。
          </p>
        </section>
        <section>
          <h3>品牌和标识</h3>
        </section>
        <Example1></Example1>
        <section>
          <h3>方向性图标</h3>
        </section>
        <Example2></Example2>
        <section>
          <h3>网站通用类</h3>
        </section>
        <Example3></Example3>
        <section>
          <h3>关于svg图标</h3>
          <p>在本UI中，使用了 SVG 图标替换了原先的 font 图标，从而带来了以下优势：</p>
          <ul style={{listStyleType:"circle",marginLeft:20}}>
              <li><p>完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。</p></li>
              <li><p>在低端设备上 SVG 有更好的清晰度。</p></li>
              <li><p>支持多色图标。</p></li>
          </ul>
        </section>
        <IconCodeVisible></IconCodeVisible>
      </div>
    )
}

export default IconExample
