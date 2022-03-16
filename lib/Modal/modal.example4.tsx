import React, { Fragment } from "react"
import Button from "../button/button"

import {opemModal} from "./modal"

const ModalExample4 = ()=>{

  const openModal = () => {
    const close =  opemModal({content:
      <Fragment>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <Button onClick={() => {close()}}>关闭</Button>
      </Fragment>})
  }
  return (
    <div>
        <Button level="important" onClick={openModal}>Open Modal</Button>
    </div>
    
  )
}


const ModalExample4_codeString = `13123`

export default ModalExample4
export{ModalExample4_codeString}