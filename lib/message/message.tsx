import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Icon from '../icon/icon'

import './message.scss'

import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker('assam')

interface message {
  content : string
  center ?: true | false
}
interface messageProps extends message{
  type : string
}

const Box:React.FunctionComponent<messageProps> = (props)=>{
  const {type,content,center} = props
  const [visible,setVisible] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setVisible(true)
    },0)
    setTimeout(()=>{
      setVisible(false)
    },3000)
  },[])

  const style = {
    opacity:visible ? 1 :0,
    top:visible ? '5%' : '2%',
    'justifyContent': center ? 'center' : 'flexstart',
  }
  return(
    <div className={sc({message:true,['message-'+type]:true})} style={style}>
      <Icon name="Chrome" style={{marginRight:10}}/>
      <span>{content}</span>
    </div>
  )
}

const body = (option:messageProps)=>{
  const component = 
    <Box {...option}/>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.createPortal(div, document.body)
  ReactDOM.render(component,div)
}


let message = {
  info : (option:message)=>{
    body({...option,type:'info'})
  },
  success : (option:message)=>{
    body({...option,type:'success'})
  },
  waring : (option:message)=>{
    body({...option,type:'waring'})
  },
  error : (option:message)=>{
    body({...option,type:'error'})
  }
}

export default message