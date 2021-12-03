import React from "react";
import {scopedClassMaker} from '../classes'

const sc = scopedClassMaker('assam-layout')


interface Props  extends React.HtmlHTMLAttributes<HTMLElement>{

}

const  Header = (props:Props) => {
  const {className,...restProps} = props
  return(
    <div className={sc('header',{extra:'hiha'})} {...restProps}>
      header
    </div>
  )
}

export default Header