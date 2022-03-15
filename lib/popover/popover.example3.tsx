import React from "react";
import Popover from './popover'
import Button from "../button/button";



const PopverExample3 = ()=>{

  const content = (
    <div>
      <p>content</p>
      <p>content</p>
      <p>content</p>
    </div>
  )
  
  return (
    <div className="popverExample2">
        <Popover content={content} title='title' trigger='hover'>
          <Button>hover me</Button>
        </Popover>
        <Popover content={content}  title='title' trigger='focus'>
          <Button>focus me</Button>
        </Popover>
        <Popover content={content}  title='title' trigger='click'>
          <Button>click me</Button>
        </Popover>
    </div>
  )
}

const popverExample3_codeString = `
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

export default PopverExample3
export {popverExample3_codeString}