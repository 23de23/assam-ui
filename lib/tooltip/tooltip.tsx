import React, { Fragment, ReactElement, useRef } from "react";
import {useToggle} from '../hooks'
import Positon from './position'

interface Props{
  children:ReactElement,
  content: string,
  placement ?: "top"  | "right" | "left" | "bottom"
}

const tooltip:React.FunctionComponent<Props> = (props)=>{
  const {children,content,placement} = props
  const {value,expand,collapse} = useToggle(false)
  const targetRef = useRef(null)

  return (
    <Fragment>
      {React.cloneElement(children,{
        onMouseEnter:expand,
        onMouseLeave:collapse,
        ref:targetRef
      })}
      {value && <Positon content={content} targetref={targetRef} placement={placement}/>} 
      {/* <Positon content={content} targetref={targetRef} placement={placement}/> */}
    </Fragment>
  )
}

tooltip.defaultProps = {
  placement: 'top',
};

export default tooltip