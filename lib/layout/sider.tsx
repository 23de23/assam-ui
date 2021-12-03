import React from "react";

import {scopedClassMaker} from '../classes'

const sc = scopedClassMaker('assam-layout')


interface Props  extends React.HtmlHTMLAttributes<HTMLElement>{

}

const  Sider = (props:Props) => {
  const {className,...restProps} = props
  return(
    <div className={sc('sider',{extra:'hiha'})} {...restProps}>
      sider
    </div>
  )
}

export default Sider