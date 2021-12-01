import React, { useState } from "react"

import {Dialog,alert} from "./dialog"

export default function(){
  const [X, setX] = useState(false)
  const [Y, setY] = useState(false)
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
        <button onClick={()=>{alert("这是一个alert测试")}}>1</button>
      </div>
    </div>
    
  )
}