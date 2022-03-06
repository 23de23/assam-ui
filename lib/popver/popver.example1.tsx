import React from "react";
import Button from "../button/button";
import Popover from './popver'

const PopverExample1 = ()=>{

  const content = (
    <div>
      <p>content</p>
      <p>content</p>
      <p>content</p>
    </div>
  )

  return (
    <Popover content={content} title='title'>
      <Button>Hover me</Button>
    </Popover>
  )
}


const popverExample1_codeString = `
          const content = (
            <div>
              <p>content</p>
              <p>content</p>
              <p>content</p>
            </div>
          )

          <Popover content={content} title='title'>
          <Button>Hover me</Button>
          </Popover>
`

export {popverExample1_codeString}
export default PopverExample1