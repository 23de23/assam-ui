import React from "react";

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
    </div>
  )
}


export default PopverExample