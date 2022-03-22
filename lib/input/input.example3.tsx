import React from "react"
import Input from "./input"
import Icon from "../icon/icon"


const InputExample3 = () => {
  const aa = <Icon name="Like"/>
    return(
        <div className="inputExample-box">
          <Input placeholder="prefix" prefix={aa}  style={{"marginBottom":"20px"}}/>
          <Input placeholder="suffix" suffix={aa}  style={{"marginBottom":"20px"}}/>
          <Input placeholder="prefix and prefix" prefix={aa} suffix={aa}  style={{"marginBottom":"20px"}}/>
        </div>
    )
}

const inputExample3_codeString = `
  123
`

export default InputExample3
export {inputExample3_codeString}