import React from "react"
import Input from "./input"


const InputExample5 = () => {
    return(
        <div className="inputExample-box">
          <Input placeholder="disabled" disabled={true} style={{"marginBottom":"20px"}}/>
        </div>
    )
}

const inputExample5_codeString = `
  123
`

export default InputExample5
export {inputExample5_codeString}