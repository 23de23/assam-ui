import React, { Fragment, ReactElement, useLayoutEffect, useRef, useState } from "react";
import {useToggle} from '../hooks'
import Positon from '../tooltip/position'
import './popver.scss'


interface Props{
  children:ReactElement,
  content: string | ReactElement,
  placement ?: "top"  | "right" | "left" | "bottom",
  title:string,
  trigger?:'hover' | 'focus' | 'click'
}

const Popver:React.FunctionComponent<Props> = (props)=>{
  const {children,content,placement,title,trigger} = props
  const [value,expand,collapse] = useToggle(false)
  const targetRef = useRef<HTMLElement | null>(null)

  const [leavePosition,setLeavePosition] = useState(false)

  const handNodeEnter = ()=>{
      setLeavePosition(false)
      if(trigger == 'hover') expand()
  }
  const handNodeLeave = ()=>{
      setLeavePosition(true)
      if(trigger == 'hover') collapse()
  }
  const handNodeClick = () => {
    if(!value){
      expand()
      setLeavePosition(false)
    }else{
      collapse()
    }
  }

  useLayoutEffect(()=>{
    if(trigger != 'click') return
    window.addEventListener('click',windowClick)
    return ()=>{
      window.removeEventListener('click',windowClick)
    }
  },[leavePosition])

  function windowClick(){
    if(trigger != 'click') return
    if(leavePosition) collapse()
  }

  function cloneProp(){
    let obj = {}
    if(trigger == 'hover'){
      obj = {
        onMouseEnter:handNodeEnter,
        onMouseLeave:handNodeLeave,
        ref:targetRef
      }
    }else if(trigger == 'focus'){
        console.log(111);
    }else if(trigger == 'click'){
      obj = {
        onClick:handNodeClick,
        ref:targetRef
      }
    }
    return obj
  }

  return (
    <Fragment>
      {React.cloneElement(children,cloneProp())}
      {value && <Positon content={content} 
                 targetref={targetRef!} 
                 placement={placement} 
                 handNodeLeave={handNodeLeave} 
                 handNodeEnter={handNodeEnter} 
                 title={title} 
                 type='popver'/> }
      {/* {<Positon content={content} targetref={targetRef} placement={placement} title={title} type='popver'/>} */}
    </Fragment>
  )
}

Popver.defaultProps = {
  placement: 'top',
  trigger: 'hover'
};

export default Popver