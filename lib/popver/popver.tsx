import React, { Fragment, ReactElement, useRef } from "react";
import {useToggle} from '../hooks'
import Positon from '../tooltip/position'
import './popver.scss'


interface Props{
  children:ReactElement,
  content: string | ReactElement,
  placement ?: "top"  | "right" | "left" | "bottom",
  title:string
}

const Popver:React.FunctionComponent<Props> = (props)=>{
  const {children,content,placement,title} = props
  const {value,expand,collapse} = useToggle(false)
  const targetRef = useRef(null)

  
  return (
    <Fragment>
      {React.cloneElement(children,{
        onMouseEnter:expand,
        onMouseLeave:collapse,
        ref:targetRef
      })}
      {value && <Positon content={content} targetref={targetRef} placement={placement} title={title} type='popver'/> }
      {/* {<Positon content={content} targetref={targetRef} placement={placement} title={title} type='popver'/>} */}
    </Fragment>
  )
}

Popver.defaultProps = {
  placement: 'top',
};

export default Popver