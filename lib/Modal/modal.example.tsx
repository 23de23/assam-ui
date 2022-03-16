import React from "react"

import ModalExample1, {ModalExample1_codeString} from './modal.example1'
import ModalExample2, {ModalExample2_codeString} from './modal.example2'
import ModalExample3, {ModalExample3_codeString} from './modal.example3'
import ModalExample4, {ModalExample4_codeString} from './modal.example4'
import CodeBox from "../component.example/codeBox"
import ApiBox from "../component.example/apiBox"


const DialogExample = ()=>{
  return (
    <div>
      <section>
          <h1>Modal 对话框</h1>
          <p>模态对话框。</p>
      </section>
      <section>
          <h2>何时使用</h2>
          <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。</p>
      </section>
      <section>
          <h2>代码演示</h2>
      </section>
      <CodeBox
          title="基本"
          text="第一个对话框。"
          egComponent={ModalExample1}
          code={ModalExample1_codeString}
      />
      <CodeBox
          title="命令式使用"
          text="调用 openModal 函数弹出一个对话框，openModal 函数将返回一个close函数。openModal 函数接受一个 options 参数，支持组件大部分属性，具体属性设置见 Options。"
          egComponent={ModalExample4}
          code={ModalExample4_codeString}
      />
      <CodeBox
          title="信息提示"
          text="以命令行调用 Modal 信息提示，只提供一个按钮用于关闭。"
          egComponent={ModalExample2}
          code={ModalExample2_codeString}
      />
      <CodeBox
          title="确认对话框"
          text="使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。"
          egComponent={ModalExample3}
          code={ModalExample3_codeString}
      />
      <ApiBox data={apiArry}></ApiBox>
    </div>
  )
}
const apiArry = [
    {attribute:'visible',content:'对话框是否可见',type:'string',default:'——'},
    {attribute:'title',content:'标题',type:'string | ReactNode',default:'"提示"'},
    {attribute:'footer',content:'底部内容',type:'ReactNode',default:'——'},
    {attribute:'closeOnClickMask',content:'是否点击蒙层可关闭',type:'boolean',default:'true'},
    {attribute:'afterClose',content:'对话框完全关闭（离场动画结束）时的回调',type:'	() => any',default:'——'},
    {attribute:'onConfirm',content:'点击确认按钮时的回调',type:'(e: React.MouseEvent) => any',default:'——'},
    {attribute:'onCancel',content:'点击取消按钮时的回调',type:'	(e: React.MouseEvent) => any',default:'——'},
    {attribute:'className',content:'自定义 Modal 类名',type:'string',default:'——'},
    {attribute:'style',content:'自定义 Modal 样式',type:'string',default:'——'},
]


export default DialogExample