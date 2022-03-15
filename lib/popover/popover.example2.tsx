import React from "react";
import Popover from './popover'
import Button from "../button/button";


const content = (
  <div>
    <p>content</p>
    <p>content</p>
    <p>content</p>
  </div>
)

const PopverExample2 = ()=>{
  return (
    <div className="popverExample2">
        <Popover content={content} title='title'>
          <Button>top</Button>
        </Popover>
        <Popover content={content} placement='left' title='title'>
          <Button>left</Button>
        </Popover>
        <Popover content={content} placement='right' title='title'>
          <Button>right</Button>
        </Popover>
        <Popover content={content} placement='bottom' title='title'>
          <Button>buttom</Button>
        </Popover>
    </div>
  )
}

const popverExample2_codeString = `
        const content = (
          <div>
            <p>content</p>
            <p>content</p>
            <p>content</p>
          </div>
        )

      <Popover content={content} title='title'>
      <Button>top</Button>
      </Popover>
      <Popover content={content} placement='left' title='title'>
      <Button>left</Button>
      </Popover>
      <Popover content={content} placement='right' title='title'>
      <Button>right</Button>
      </Popover>
      <Popover content={content} placement='bottom' title='title'>
      <Button>buttom</Button>
      </Popover>
`

export default PopverExample2
export {popverExample2_codeString}