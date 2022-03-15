import React from "react";
import PopverExample1,{popverExample1_codeString} from "./popover.example1";
import PopverExample2,{popverExample2_codeString} from "./popover.example2";
import PopverExample3,{popverExample3_codeString} from "./popover.example3";
import PopverExample4,{popverExample4_codeString} from "./popover.example4";
import CodeBox from "../component.example/codeBox";
import ApiBox from "../component.example/apiBox";
import './popover.example.scss'

const PopverExample = ()=>{
  return (
    <div>
        <section>
          <h1>Popover 气泡卡片</h1>
          <p>点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <ul style={{listStyleType:"circle",marginLeft:20}}>
              <li><p>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p></li>
              <li><p>和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等</p></li>
          </ul>
      </section>

      <CodeBox
        title="基本用法。"
        text='最基本的用法，浮层大小由内容区决定。'
        egComponent={PopverExample1}
        code={popverExample1_codeString}
      />
      <CodeBox
        title="位置。"
        text='位置支持4个方向。'
        egComponent={PopverExample2}
        code={popverExample2_codeString}
      />
      <CodeBox
        title="触发方式。"
        text='支持 hover, click, focus 三种触发方式。'
        egComponent={PopverExample3}
        code={popverExample3_codeString}
      />
      <CodeBox
        title="从浮层内关闭。"
        text='使用 visible 属性控制浮层显示。'
        egComponent={PopverExample4}
        code={popverExample4_codeString}
      />
      <ApiBox data={apiArry}></ApiBox>
    </div>
  )
}

const apiArry = [
  {attribute:'title ',content:'标题',type:'string | ReactNode | () => ReactNode',default:'———'},
  {attribute:'content',content:'浮层内容',type:'string | ReactNode | () => ReactNode',default:'———'},
  {attribute:'placement',content:'气泡框位置，可选 top left right bottom',type:'string',default:'top'},
  {attribute:'trigger',content:'触发行为，可选 hover | focus | click',type:'string',default:'hover'},
  {attribute:'visible',content:'用于手动控制浮层显隐',type:'boolean',default:'false'},
  {attribute:'onVisibleChange',content:'显示隐藏的回调',type:'(visible) => void',default:'———'},
]


export default PopverExample