import React from "react"
import Input from "./input"


const InputExample2 = () => {
    return(
        <div className="inputExample-box">
            <Input placeholder="large size" size="large" style={{"marginBottom":"20px"}}/>
            <Input placeholder="default size" style={{"marginBottom":"20px"}}/>
            <Input placeholder="small size" size="small"/>
        </div>
    )
}

const inputExample2_codeString = `
  123
`

export default InputExample2
export {inputExample2_codeString}