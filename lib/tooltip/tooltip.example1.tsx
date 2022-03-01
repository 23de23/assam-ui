import React from "react";
import Tooltip from "./tooltip";
import Button from "../button/button";

const TooltipExample1 = ()=>{
  return (
    <Tooltip>
      {/* <Button>Tooltip will show on mouse enter.</Button> */}
      <div>Tooltip will show on mouse enter.</div>
    </Tooltip>
  )
}

const tooltipExample1_codeString = `123`

export default TooltipExample1
export {tooltipExample1_codeString}