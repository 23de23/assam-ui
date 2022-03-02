import React from "react";
import Button from "../button/button";
import Popover from './popver'

const PopverExample1 = ()=>{
  return (
    <Popover>
      <Button>Hover me</Button>
    </Popover>
  )
}


const popverExample1_codeString = `
123
`

export {popverExample1_codeString}
export default PopverExample1