import React, { Fragment, useState } from "react"

import Modal from "./modal"
import Button from "../button/button"

const ModalExample1 = ()=>{
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div>
      <Button level="important" onClick={()=>{setIsModalVisible(!isModalVisible)}}>Open Modal</Button>
      <Modal 
        visible={isModalVisible}
        footer={[
          <Button onClick={()=>{setIsModalVisible(false)}}>取消</Button>,
          <Button level="important" onClick={()=>{setIsModalVisible(false)}}>确认</Button>,
        ]} 
        onClose={()=>{setIsModalVisible(false)}}>
        <Fragment>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Fragment>
      </Modal>
    </div>
    
  )
}


const ModalExample1_codeString = `13123`

export default ModalExample1
export{ModalExample1_codeString}