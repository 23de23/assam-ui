import React, { ReactElement } from "react";

import {scopedClassMaker} from '../helpers/classes'

const sc = scopedClassMaker('assam-layout')


interface Props  extends React.HtmlHTMLAttributes<HTMLElement>{
  children : ReactElement | Array<ReactElement> | String
}

const  Sider = (props:Props) => {
  const {className,children,...restProps} = props
  return(
    <div className={sc('sider',{extra:className})} {...restProps}>
      {children}
    </div>
  )
}

export default Sider