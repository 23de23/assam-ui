import React from "react";

import {scopedClassMaker} from '../classes'

const sc = scopedClassMaker('assam-layout')


interface Props  extends React.HtmlHTMLAttributes<HTMLElement>{

}

const  Footer = (props:Props) => {
  const {className,...restProps} = props
  return(
    <div className={sc('footer',{extra:'hiha'})} {...restProps}>
      footer
    </div>
  )
}

export default Footer