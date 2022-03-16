import React from "react"
import Button from "../button/button"

import {confirm} from "./modal"

const ModalExample3 = ()=>{
  const handClick = ()=>{
    confirm({
      content: "是否确认这个通知",
      onOk: ()=>{console.log('成功')},
      onCancel: () => {console.log('失败')},
    })
  }

  return (
      <div>
        <Button onClick={handClick}>confirm</Button>
      </div>
  )
}


const ModalExample3_codeString = `13123`

export default ModalExample3
export{ModalExample3_codeString}