import React, { Fragment, MutableRefObject, ReactElement, useLayoutEffect, useRef, useState } from "react";
import './position.scss'
import {scopedClassMaker} from '../helpers/classes'
import ReactDOM from "react-dom";
const sc = scopedClassMaker('assam-position')
interface Props{
  targetref:MutableRefObject<Element|null>,
  content: string | ReactElement,
  placement ?: "top"  | "right" | "left" | "bottom",
  title ?:string,
  type: 'popver' | 'tooltip'
}
interface Positionobj{
  left:number,
  top:number,
  opacity:number
}

const div = document.createElement('div')

const Position:React.FunctionComponent<Props> = (props)=>{
  const {targetref,content,placement,title,type} = props
  const [style,setStyle] = useState({})
  const node = useRef<Element | null | any>(null)

  useLayoutEffect(()=>{
    document.body.append(div)

    const clientTarget = targetref.current!.getBoundingClientRect()
    const clientPosition = node.current!.getBoundingClientRect()
    const obj = getPositiong(clientTarget,clientPosition,placement)
    setStyle(obj)
    console.log(obj);
    
    console.log(clientPosition);
    
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
        <div style={style} ref={node} className={sc({'':true,[placement!]:true,[type == 'tooltip' ? 'tooltip' : 'popver']:true})}>

        {type == 'tooltip' ? tooltip : popver}

        </div>
      )
      ,div)
  )
}
export default Position


function getPositiong (clientTarget: DOMRect,clientPosition: { height: number; width: number; },placement: string | undefined){
  let obj:Positionobj = {
    opacity:1,
    left:0,
    top:0,
  }
  if(placement == 'top'){
    obj.top = clientTarget.y - clientPosition.height - 14
    obj.left = clientTarget.left + (clientTarget.right - clientTarget.left)/2
  }else if(placement == 'left'){
    obj.top = clientTarget.top + clientTarget.height/2
    obj.left = clientTarget.left - clientPosition.width -14
  }else if(placement == 'right'){
    obj.top = clientTarget.top + clientTarget.height/2
    obj.left = clientTarget.left + clientTarget.width +14
  }else if(placement == 'bottom'){
    obj.top = clientTarget.top + clientTarget.height +14
    obj.left = clientTarget.left + (clientTarget.right - clientTarget.left)/2
  }

  console.log(obj);
  
  return obj
}