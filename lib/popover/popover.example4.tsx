import React, { useState } from "react";
import Popover from './popover'
import Button from "../button/button";


const PopverExample4 = ()=>{
  const [visible,setVisible] = useState(false)

  const handClick = ()=>{
    setVisible(true)
  }
  const handleVisibleChange  = (visible:boolean)=>{
    setVisible(visible)
  }

  const content = (
    <div>
      <a style={{color:'#1890ff',cursor:'pointer'}} onClick={handClick}>close</a>
    </div>
  )

  return (
    <div className="popverExample2">
        <Popover content={content}  
                 title='title' 
                 trigger='click' 
                 visible={visible} 
                 onVisibleChange={handleVisibleChange}>
          <Button>click me</Button>
        </Popover>
    </div>
  )
}

const popverExample4_codeString = `
        const [visible,setVisible] = useState(false)

        const handClick = ()=>{
          setVisible(true)
        }
        const handleVisibleChange  = (visible:boolean)=>{
          setVisible(visible)
        }

        const content = (
          <div>
            <a onClick={handClick}>close</a>
          </div>
        )

        <Popover content={content}  
        title='title' 
        trigger='click' 
        visible={visible} 
        onVisibleChange={handleVisibleChange}>
        <Button>click me</Button>
        </Popover>
`

export default PopverExample4
export {popverExample4_codeString}