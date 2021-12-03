import React, { ReactElement } from "react";

import Sider from './sider'
import {scopedClassMaker} from '../classes'
import './layout.scss'

const sc = scopedClassMaker('assam-layout')


interface Props  extends React.HtmlHTMLAttributes<HTMLElement>{
  children : ReactElement | Array<ReactElement>
}

const  Layout = (props:Props) => {
  const {children,className,...restProps} = props;
  const childrenAS = children as Array<ReactElement>
  const hasSider = childrenAS.length && childrenAS.reduce((result,node)=> result || node.type === Sider,false)
  return(
    <div className={sc('',{extra:[className,hasSider && 'hasSider'].join(' ')})} {...restProps}>
      {children}
    </div>
  )
}

export default Layout