import React from "react";

import './tooltip.example.scss'
import CodeBox from "../component.example/codeBox";
import ApiBox from "../component.example/apiBox";
import TooltipExample1,{tooltipExample1_codeString} from "./tooltip.example1";
import TooltipExample2,{tooltipExample2_codeString} from "./tooltip.example2";

const TooltipExample = ()=>{
  return (
    <div>
      <section>
          <h1>Tooltip文字提示</h1>
          <p>简单的文字提示气泡框。</p>
      </section>
      <section>
          <h2>何时使用</h2>
          <ul style={{listStyleType:"circle",marginLeft:20}}>
              <li><p>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</p></li>
              <li><p>可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。</p></li>
          </ul>
      </section>
      <section>
          <h2>代码演示</h2>
      </section>
      
      <CodeBox
        title="基本用法。"
        text='最简单的用法。'
        egComponent={TooltipExample1}
        code={tooltipExample1_codeString}
      />
      <CodeBox
        title="位置。"
        text='位置支持4个方向。'
        egComponent={TooltipExample2}
        code={tooltipExample2_codeString}
      />
      <ApiBox data={apiArry}></ApiBox>

      <section>
        <h2>注意</h2>
        <p>请确保 Popover 的子元素能接受 onMouseEnter、onMouseLeave、onFocus、onBlur、onClick 事件。</p>
      </section>
    </div>
  )
}

const apiArry = [
  {attribute:'placement',content:'气泡框位置，可选 top left right bottom',type:'string',default:'top'},
  {attribute:'content',content:'浮层内容',type:'string',default:'———'},
  {attribute:'className',content:'自定义 Message 类名',type:'string',default:'———'},
  {attribute:'style',content:'自定义 Message 样式',type:'React.CSSProperties',default:'———'},
]

export default TooltipExample