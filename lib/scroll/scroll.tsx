import React from "react"

import { scopedClassMaker } from "../helpers/classes"

import './scroll.scss'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement>{

}


const sc = scopedClassMaker('assam-scroll')

const Scroll = (props:Props) => {
  const {children,className,...restProps}  = props
  return(
    <div {...restProps} className={sc('',{extra:className})}>
      <div className={sc('inner')}>
        {children}
      </div>
    </div>
  )
}

export default Scroll