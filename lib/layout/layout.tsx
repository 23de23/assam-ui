import React, { ReactElement } from "react";


import Sider from './sider'
import {scopedClassMaker} from '../helpers/classes'
import './layout.scss'
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

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
export {Content,Footer,Header,Layout,Sider}