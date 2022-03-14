import React, { Fragment, ReactElement, useRef, useState } from "react";
import {useToggle} from '../hooks'
import Positon from '../tooltip/position'
import './popver.scss'


interface Props{
  children:ReactElement,
  content: string | ReactElement,
  placement ?: "top"  | "right" | "left" | "bottom",
  title:string,
  trigger?:'hover' | 'focus' | 'click'
}

const Popver:React.FunctionComponent<Props> = (props)=>{
  const {children,content,placement,title,trigger} = props
  const {value,expand,collapse} = useToggle(false)
  const targetRef = useRef<HTMLElement | null>(null)

  const [clickState,setClickState] = useState(false)

  const handNodeLeave = ()=>{
    if(trigger == 'hover'){
      collapsePosition()
    }else if(trigger == 'focus'){

    }else if(trigger == 'click'){

    }
  }
  const handNodeEnter = ()=>{
    expandPosition()
    if(trigger == 'click'){
      setClickState(true)
      document.body.addEventListener('click',()=>{
        if(!clickState){
          collapsePosition()
        }
      })
    }
  }


  const expandPosition = ()=>{
    console.log('click')
    expand()
  }
  const collapsePosition = ()=>{
    collapse()
  }

  function cloneProp(){
    let obj = {}
    if(trigger == 'hover'){
      obj = {
        onMouseEnter:expandPosition,
        onMouseLeave:handNodeLeave,
        ref:targetRef
      }
    }else if(trigger == 'focus'){
        console.log(111);
    }else if(trigger == 'click'){
      obj = {
        onClick:expandPosition,
        onMouseLeave:handNodeLeave,
        ref:targetRef
      }
    }
    return obj
  }

  return (
    <Fragment>
      {React.cloneElement(children,cloneProp())}
      {value && <Positon content={content} 
                 targetref={targetRef!} 
                 placement={placement} 
                 handNodeLeave={handNodeLeave} 
                 handNodeEnter={handNodeEnter} 
                 title={title} 
                 type='popver'/> }
      {/* {<Positon content={content} targetref={targetRef} placement={placement} title={title} type='popver'/>} */}
    </Fragment>
  )
}

Popver.defaultProps = {
  placement: 'top',
  trigger: 'hover'
};

export default Popver