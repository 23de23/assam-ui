import React, { useEffect, useRef, useState } from "react"

import { scopedClassMaker } from "../helpers/classes"

import './scroll.scss'
import scrollbarWidth from "./scrollbar-width"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement>{

}


const sc = scopedClassMaker('assam-scroll')

const Scroll = (props:Props) => {
  const {children,className,...restProps}  = props


  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollBarHeight,setScrollBarHeight] = useState(0)
  const [scrollBarTop,setScrollBarTop] = useState(0)
  useEffect(()=>{
    const {current} = containerRef
    const viewHeight = current!.getBoundingClientRect().height //可视区域高度
    const scrollHeight = current!.scrollHeight //可滚动区域高度
    setScrollBarHeight(viewHeight*viewHeight/scrollHeight)
  },[])
  const onScroll = () => {
    const {current} = containerRef
    const viewHeight = current!.getBoundingClientRect().height //可视区域高度
    const scrollHeight = current!.scrollHeight //可滚动区域高度
    const scrollTop = current!.scrollTop
    setScrollBarTop(scrollTop*viewHeight/scrollHeight)
  }

  return(
    <div {...restProps} className={sc('',{extra:className})}>
      <div className={sc('inner')} onScroll={onScroll} ref={containerRef} style={{right:-scrollbarWidth()}}>
        {children}
      </div>
      <div className={sc('track')}>
        <div style={{height:scrollBarHeight,transform:`translateY(${scrollBarTop}px)`}} className={sc('scrollBar')}></div>
      </div>
    </div>
  )
}

export default Scroll