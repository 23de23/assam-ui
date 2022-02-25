import React from "react";

import CodeBox from "../component.example/codeBox";
import TooltipExample1,{tooltipExample1_codeString} from "./tooltip.example1";

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

    </div>
  )
}

export default TooltipExample