import React from "react"

import {alert} from "./modal"
import Button from "../button/button"


const ModalExample2 = ()=>{
  return (
    <div>
      <Button onClick={()=>{alert({title:'这是一则提示',content:"这是一个alert测试"})}} style={{"marginRight":20}}>Alert</Button>
    </div>
    
  )
}


const ModalExample2_codeString = `13123`

export default ModalExample2
export{ModalExample2_codeString}