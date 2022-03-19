import React, { useEffect, useRef, useState } from "react"

import { scopedClassMaker } from "../helpers/classes"

import './scroll.scss'
import scrollbarWidth from "./scrollbar-width"

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement>{
  trackClassName?: string,
  trackStyle?: React.CSSProperties,
  scroollBarClassName?: string,
  scrollBarStyle?: React.CSSProperties
}


const sc = scopedClassMaker('assam-scroll')

const Scroll = (props:Props) => {
  const {children,className,trackClassName,trackStyle,scroollBarClassName,scrollBarStyle,...restProps}  = props


  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollBarHeight,setScrollBarHeight] = useState(0)
  const [scrollBarTop,_setScrollBarTop] = useState(0)
  const [barVisible, setBarVisible] = useState(false);

  const barScrollTopRef = useRef(0)
  const barClientYRef = useRef(0)
  const barClickRef = useRef(false)


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

    document.addEventListener('mousemove',onBarMouseMove)
    document.addEventListener('mouseup',onBarMouseUp)
    document.addEventListener('selectstart',onSelect)

    return () => {
      document.removeEventListener('mousemove',onBarMouseMove)
      document.removeEventListener('mouseup',onBarMouseUp)
      document.removeEventListener('selectstart',onSelect)
    }
  },[])

  const timeVisible:any = useRef(null)
  const onScroll = () => {
    setBarVisible(true)
    const {current} = containerRef
    const viewHeight = current!.getBoundingClientRect().height //可视区域高度
    const scrollHeight = current!.scrollHeight //可滚动区域高度
    const scrollTop = current!.scrollTop
    setScrollBarTop(scrollTop*viewHeight/scrollHeight)
    if(timeVisible.current) clearTimeout(timeVisible.current)
    timeVisible.current = setTimeout(() => {
      setBarVisible(false)
    }, 1000);
  }

  const barMouseDowm:React.MouseEventHandler = (e) => {
    barClickRef.current = true
    barClientYRef.current = e.clientY
    barScrollTopRef.current = scrollBarTop


  }
  const onBarMouseUp = (e:MouseEvent) => {
    barClickRef.current = false
  }
  const onBarMouseMove = (e:MouseEvent) => {
    if(!barClickRef.current) return 
    const barScrollTop = barScrollTopRef.current + (e.clientY - barClientYRef.current)
    setScrollBarTop(barScrollTop)

    const {current} = containerRef
    const viewHeight = current!.getBoundingClientRect().height //可视区域高度
    const scrollHeight = current!.scrollHeight //可滚动区域高度
    containerRef.current!.scrollTop = (barScrollTop*scrollHeight/viewHeight)
  }

  const onSelect = (e:Event) => {
    if(barClickRef.current) e.preventDefault()
  }

  return(
    <div {...restProps} className={sc('',{extra:className})}>
      <div className={sc('inner')} 
           onScroll={onScroll}
           ref={containerRef}
           style={{right:-scrollbarWidth()}}>
        {children}
      </div>
      {barVisible ? 
      <div className={sc('track',{extra:trackClassName})}
           style={trackStyle}
           onMouseDown={barMouseDowm}>
        <div style={{height:scrollBarHeight,transform:`translateY(${scrollBarTop}px)`,...scrollBarStyle}} 
             className={sc('scrollBar',{extra:scroollBarClassName})}></div>
      </div> : null}
    </div>
  )
}

export default Scroll