import React, { Fragment, useState } from "react"

import Dialog,{alert,confirm, modal} from "./dialog"

export default function(){
  const [X, setX] = useState(false)
  const [Y, setY] = useState(false)

  const openModal = () => {
    const close =  modal(<Fragment>
        <div>12312312312313<button onClick={() => {close()}}>123</button></div>
      </Fragment>)
  }
  return (
    <div>
      <div>
        <h1>example1</h1>
        <button onClick={()=>{setX(!X)}}>click</button>
        <Dialog visible={X} footer={[
          <button onClick={()=>{setX(false)}}>确认</button>,
          <button onClick={()=>{setX(false)}}>取消</button>,
          <button onClick={()=>{setX(false)}}>不确认</button>
        ]} onClose={()=>{setX(false)}}>
          <strong>我加粗了，嘿嘿嘿</strong>
        </Dialog>
      </div>
      <div>
        <h1>example1</h1>
        <button onClick={()=>{setY(!Y)}}>click</button>
        <Dialog visible={Y} footer={[
          <button onClick={()=>{setY(false)}}>确认</button>,
          <button onClick={()=>{setY(false)}}>取消</button>,
          <button onClick={()=>{setY(false)}}>不确认</button>
        ]} onClose={()=>{setY(false)}} closeOnClickMask={false}>
          <strong>我加粗了，嘿嘿嘿</strong>
        </Dialog>
      </div>
      <div>
        <h1>example3</h1>
        <button onClick={()=>{alert("这是一个alert测试")}}>alert</button>
        <button onClick={()=>{confirm("是否确认这个通知",()=>{console.log('成功')}, () => {console.log('失败')})}}>confirm</button>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
    
  )
}