import React, { Fragment, ReactElement, useRef } from "react";
import {useToggle} from '../hooks'
import Positon from './position'

interface Props{
  children:ReactElement
}

const tooltip:React.FunctionComponent<Props> = (props)=>{
  const {children} = props
  const {value,expand,collapse} = useToggle(false)
  const targetRef = useRef(null)

  console.log(React.cloneElement(children,{
    onMouseEnter:expand,
    onMouseLeave:collapse,
    ref:targetRef
  }))
  return (
    <Fragment>
      {React.cloneElement(children,{
        onMouseEnter:expand,
        onMouseLeave:collapse,
        ref:targetRef
      })}
      {value && <Positon targetref={targetRef}/>}

    </Fragment>
  )
}

export default tooltip