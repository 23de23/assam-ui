import React, { Fragment, MouseEventHandler, MutableRefObject, ReactElement, useLayoutEffect, useRef, useState } from "react";
import './position.scss'
import {scopedClassMaker} from '../../helpers/classes'
import ReactDOM from "react-dom";
const sc = scopedClassMaker('assam-position')
interface Props{
  targetref:MutableRefObject<HTMLElement | null>,
  content: string | ReactElement,
  placement ?: "top"  | "right" | "left" | "bottom",
  title ?:string | ReactElement,
  type: 'popver' | 'tooltip',
  handNodeLeave: MouseEventHandler<HTMLDivElement>,
  handNodeEnter: MouseEventHandler<HTMLDivElement>,
}
interface Positionobj{
  left:number,
  top:number,
  opacity:number
}



const Position:React.FunctionComponent<Props> = (props)=>{
  const {targetref,content,placement,title,type} = props
  const [style,setStyle] = useState({})
  const [div,setDiv] = useState(document.createElement('div'))
  const node = useRef(null)

  useLayoutEffect(()=>{
    document.body.append(div)
    const targetHtml = targetref.current!
    const positionHtml = node.current!
    const obj = getPositiong(targetHtml,positionHtml,placement)
    setStyle(obj)
    
    return ()=>{
      setStyle({...style,opacity:0})
      div.remove()
    }
  },[])


  const tooltip = <Fragment>{content}</Fragment>
  const popver = (
    <Fragment>
      <div className={sc('popver-title')}>{title}</div>
      <div className={sc('popver-content')}>{content}</div>
    </Fragment>
  )


  return (
    ReactDOM.createPortal(
      (
        <div style={style} onMouseEnter={props.handNodeEnter} onMouseLeave={props.handNodeLeave} ref={node} className={sc({'':true,[placement!]:true})}>

          <div   className={sc({'content':true,[placement!]:true,[type == 'tooltip' ? 'tooltip' : 'popver']:true})}>

          {type == 'tooltip' ? tooltip : popver}

          </div>
        </div>
      )
      ,div)
  )
}
export default Position


function getPositiong (targetHtml: HTMLElement ,positionHtml: HTMLElement,placement: string | undefined){
  let obj:Positionobj = {
    opacity:1,
    left:0,
    top:0,
  }

  let { width, height, top, left } = targetHtml.getBoundingClientRect()
  let { width:width2, height:height2 } = positionHtml.getBoundingClientRect()

  if(placement == 'top'){
    obj.top = top - height2 + window.pageYOffset
    obj.left = left  + width/2 + window.pageXOffset
  }else if(placement == 'left'){
    obj.top = top + height/2 + window.pageYOffset
    obj.left = left - width2 + window.pageXOffset
  }else if(placement == 'right'){
    obj.top = top + height/2 + window.pageYOffset
    obj.left = left + width + window.pageXOffset
  }else if(placement == 'bottom'){
    obj.top = top + height + window.pageYOffset
    obj.left = left + width/2 + window.pageXOffset
  }

  console.log(obj);
  
  return obj
}