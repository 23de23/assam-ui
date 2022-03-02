import React, { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import './position.scss'
import {scopedClassMaker} from '../helpers/classes'
const sc = scopedClassMaker('assam-position')
interface Props{
  targetref:MutableRefObject<Element|null>,
  content: string,
  placement ?: "top"  | "right" | "left" | "bottom"
}
interface Positionobj{
  left:number,
  top:number
}

const Position:React.FunctionComponent<Props> = (props)=>{
  const {targetref,content,placement} = props
  const [style,setStyle] = useState({})
  const node = useRef<Element | null | any>(null)
  useLayoutEffect(()=>{
    const clientTarget = targetref.current!.getBoundingClientRect()
    const clientPosition = node.current!.getBoundingClientRect()
    const obj = getPositiong(clientTarget,clientPosition,placement)
    setStyle(obj)
  },[])
  return (
    <div style={style} ref={node} className={sc({'':true,[placement!]:true})}>
      {content}
    </div>
  )
}
export default Position


function getPositiong (clientTarget: DOMRect,clientPosition: { height: number; width: number; },placement: string | undefined){
  let obj:Positionobj = {
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
    obj.left = clientTarget.left + clientPosition.width +14
  }else if(placement == 'bottom'){
    obj.top = clientTarget.top + clientPosition.height + 14
    obj.left = clientTarget.left + (clientTarget.right - clientTarget.left)/2
  }

  console.log(obj);
  
  return obj
}