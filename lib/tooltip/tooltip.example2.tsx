import React from "react";
import Tooltip from "./tooltip";
import Button from "../button/button";

const TooltipExample2 = ()=>{
  return (
    <div className="tooltipExample2">
        <Tooltip content={'prompt text'}>
          <Button>top</Button>
        </Tooltip>
        <Tooltip content={'prompt text'} placement='left'>
          <Button>left</Button>
        </Tooltip>
        <Tooltip content={'prompt text'} placement='right'>
          <Button>right</Button>
        </Tooltip>
        <Tooltip content={'prompt text'} placement='bottom'>
          <Button>buttom</Button>
        </Tooltip>
    </div>
  )
}

const tooltipExample2_codeString = `
            <Tooltip content={'prompt text'}>
            <Button>top</Button>
            </Tooltip>
            <Tooltip content={'prompt text'} placement='left'>
            <Button>left</Button>
            </Tooltip>
            <Tooltip content={'prompt text'} placement='right'>
            <Button>right</Button>
            </Tooltip>
            <Tooltip content={'prompt text'} placement='bottom'>
            <Button>buttom</Button>
            </Tooltip>
`

export default TooltipExample2
export {tooltipExample2_codeString}