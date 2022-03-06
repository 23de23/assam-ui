import React, { Fragment, ReactElement, useRef } from "react";
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
  const {value,expand,collapse} = useToggle(false)
  const targetRef = useRef<HTMLElement | null>(null)

  const clickPropver = ()=>{
    expand()
  }

  function cloneProp(){
    let obj = {}
    if(trigger == 'hover'){
      obj = {
        onMouseEnter:expand,
        onMouseLeave:collapse,
        ref:targetRef
      }
    }else if(trigger == 'focus'){
        console.log(111);
    }else if(trigger == 'click'){
      obj = {
        onClick:clickPropver,
        ref:targetRef
      }
    }
    return obj
  }

  return (
    <Fragment>
      {React.cloneElement(children,cloneProp())}
      {value && <Positon content={content} targetref={targetRef!} placement={placement} title={title} type='popver'/> }
      {/* {<Positon content={content} targetref={targetRef} placement={placement} title={title} type='popver'/>} */}
    </Fragment>
  )
}

Popver.defaultProps = {
  placement: 'top',
  trigger: 'hover'
};

export default Popver