import React from "react"

import ModalExample1, {ModalExample1_codeString} from './modal.example1'
import ModalExample2, {ModalExample2_codeString} from './modal.example2'
import ModalExample10, {ModalExample10_codeString} from './modal.example10'
import CodeBox from "../component.example/codeBox"
import ApiBox from "../component.example/apiBox"

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-dialog')

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
          title="信息提示"
          text="各种类型的信息提示，只提供一个按钮用于关闭。"
          egComponent={ModalExample2}
          code={ModalExample2_codeString}
      />
      <CodeBox
          title="基本"
          text="第一个对话框。"
          egComponent={ModalExample10}
          code={ModalExample10_codeString}
      />
    </div>
  )
}


export default DialogExample