import React, { FunctionComponent, useState } from 'react'

import Icon from "../icon/icon"
import CodeVisible from './codeVIsible'
import Tooltip from '../tooltip/tooltip'


import './codeBox.scss'

interface Props{
  egComponent:FunctionComponent,
  text:string,
  title:string,
  bgc?:string,
  code:string,
  visible?:true | false
}

const CodeBox:React.FunctionComponent<Props> = (props)=>{
  const [visible,setVisible] = useState(props.visible ? props.visible : false)
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
                <Tooltip content={visible ? 'hide code' : 'show code'}>
                  <Icon name='Code'></Icon>
                </Tooltip>
              </div>              
          </div>
      </div>
      {
        visible ? <CodeVisible code={props.code}></CodeVisible>:""
      }
    </div>
  )
}

export default CodeBox