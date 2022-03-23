import React from "react"
import Input from "./input"


const InputExample4 = () => {
    return(
        <div className="inputExample-box">
          <Input placeholder="mysite" addonBefore="http://"   style={{"marginBottom":"20px"}}/>
          <Input placeholder="mysite" addonAfter=".com"  style={{"marginBottom":"20px"}}/>
          <Input placeholder="mysite" addonBefore="http://" addonAfter=".com"  style={{"marginBottom":"20px"}}/>
        </div>
    )
}

const inputExample4_codeString = `
  123
`

export default InputExample4
export {inputExample4_codeString}