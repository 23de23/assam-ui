import React from "react"

import {alert} from "./modal"
import Button from "../button/button"


const ModalExample2 = ()=>{
  return (
    <div>
      <Button onClick={()=>{alert("这是一个alert测试")}} style={{"marginRight":20}}>Info</Button>
      <Button onClick={()=>{alert("这是一个alert测试")}} style={{"marginRight":20}}>Sucecess</Button>
      <Button onClick={()=>{alert("这是一个alert测试")}} style={{"marginRight":20}}>Error</Button>
      <Button onClick={()=>{alert("这是一个alert测试")}}>Warning</Button>
    </div>
    
  )
}


const ModalExample2_codeString = `13123`

export default ModalExample2
export{ModalExample2_codeString}