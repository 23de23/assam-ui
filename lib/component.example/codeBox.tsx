import React, { FunctionComponent, useState } from 'react'

import Icon from "../icon/icon"

import './codeBox.scss'

interface Props{
  egComponent:FunctionComponent,
  text:string,
  title:string,
  codeComponent:FunctionComponent,
  bgc:string
}

const CodeBox:React.FunctionComponent<Props> = (props)=>{
  const [visible,setVisible] = useState(false)
  const onVisibleCode = ()=>{
    setVisible(!visible)
  }
  return(
    <div className="code-box">
      <div className="code-show" style={{"backgroundColor":props.bgc}}>{<props.egComponent/>}</div>
      <div className="code-text">
          <div className="code-title">{props.title}</div>
          <div>
              {props.text}
              <div className="code-icon" onClick={onVisibleCode}>
                  <Icon name='Code'></Icon>
              </div>              
          </div>
      </div>
      {
        visible ? <div>iconWrapper</div>:""
      }
    </div>
  )
}

export default CodeBox