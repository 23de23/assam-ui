import React, { useState } from "react"

import Dialog from "./dialog"

export default function(){
  const [x, setX] = useState(true)
  return (
    <div>
      <button onClick={()=>{setX(!x)}}>click</button>
      <Dialog visible={x}>
        <strong>我加粗了，嘿嘿嘿</strong>
      </Dialog>
    </div>
  )
}