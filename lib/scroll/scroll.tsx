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
  const [scrollBarTop,_setScrollBarTop] = useState(0)

  const initYRef = useRef(0)
  const pullingRef = useRef(false)


  const setScrollBarTop = (scrollTop:number) => {
    const {current} = containerRef
    const viewHeight = current!.getBoundingClientRect().height //可视区域高度
    const scrollHeight = current!.scrollHeight //可滚动区域高度
    if(scrollTop<0) return
    if(scrollTop > (scrollHeight-viewHeight)*viewHeight/scrollHeight)return

    _setScrollBarTop(scrollTop)
  }
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

  const barMouseDowm:React.MouseEventHandler = (e) => {
    pullingRef.current = true
    initYRef.current = e.clientY
    console.log(this)
  }
  const barMouseUp = (e:MouseEvent) => {
    pullingRef.current = false
  }
  const barMouseMove = (e:MouseEvent) => {
    if(!pullingRef.current) return 
    setScrollBarTop(scrollBarTop + e.clientY - initYRef.current)
  }

  useEffect(()=>{
    document.addEventListener('mousemove',barMouseMove)
    document.addEventListener('mouseup',barMouseUp)
  },[])

  return(
    <div {...restProps} className={sc('',{extra:className})}>
      <div className={sc('inner')} 
           onScroll={onScroll}
           ref={containerRef}
           style={{right:-scrollbarWidth()}}>
        {children}
      </div>
      <div className={sc('track')}
           onMouseDown={barMouseDowm}>
        <div style={{height:scrollBarHeight,transform:`translateY(${scrollBarTop}px)`}} className={sc('scrollBar')}></div>
      </div>
    </div>
  )
}

export default Scroll