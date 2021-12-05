import React from "react";

import {scopedClassMaker} from '../helpers/classes'

const sc = scopedClassMaker('assam-layout')


interface Props  extends React.HtmlHTMLAttributes<HTMLElement>{

}

const  Content = (props:Props) => {
  const {className,...restProps} = props
  return(
    <div className={sc('content',{extra:'hiha'})} {...restProps}>
      content
    </div>
  )
}

export default Content