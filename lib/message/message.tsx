import React from "react";
import ReactDOM from "react-dom";
import Icon from '../icon/icon'

import './message.scss'

import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker('assam')
// const message = ()=>{
//   return(
//     <div>1</div>
//   )
// }

const body = (string:string,type:string)=>{
  const component = (
    <div className={sc({message:true,['message-'+type]:true})}>
      <Icon name="Chrome" style={{marginRight:10}}/>
      <span>{string}</span>
    </div>
  )
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.createPortal(div, document.body)
  ReactDOM.render(component,div)
}

let message = {
  info : (string:string)=>{
    body(string,'info')
  },
  success : (string:string)=>{
    body(string,'success')
  },
  waring : (string:string)=>{
    body(string,'waring')
  },
  error : (string:string)=>{
    body(string,'error')
  }
}

// message.info('恭喜你，这是一条成功消息')
// message.success('恭喜你，这是一条成功消息')
// message.waring('恭喜你，这是一条成功消息')
// message.error('恭喜你，这是一条成功消息')

export default message