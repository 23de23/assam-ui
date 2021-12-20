import React, { ChangeEventHandler, useRef, useState } from "react"
import {scopedClassMaker} from '../helpers/classes'
import useUpdate from "../hooks"
const sc = scopedClassMaker('assam-tree')

  interface Props {
    treeItem:treeDataItem,
    level:number,
    treePops:treePops
  }

const TreeItem:React.FunctionComponent<Props> = (props) => {
    const {treePops,treeItem,level} = props
   
    const fnOnChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        if(treePops.multiple === true){
          if(e.target.checked){
            treePops.onChange([...treePops.selected,treeItem.value])
          }else{
            treePops.onChange(treePops.selected.filter((i)=>i !== treeItem.value))
          }
        }else{
          const aa = treeItem.value === treePops.selected ? '' : treeItem.value
          treePops.onChange(aa)
        }
      }

      const checkedBoolean = treePops.multiple ? treePops.selected.indexOf(treeItem.value)>=0 : treeItem.value===treePops.selected
  
      const [show,setShow] = useState(true)
      const unfold = () => {
        if(!transitionReady.current) return
        setShow(!show)
      }
      const fold = () => {
        if(!transitionReady.current) return
        setShow(!show)
      }

      const childrenDiv = useRef<HTMLDivElement>(null)
      const transitionReady = useRef(true)
      useUpdate(show,()=>{
        if(childrenDiv.current){
          if(!transitionReady.current){
            return
          }
          const transitionDuration = 300 //预留接口用户可传入时间单位ms的number
          childrenDiv.current.style.transitionDuration = transitionDuration+'ms'
          transitionReady.current = false
          setTimeout(() => {
            transitionReady.current = true
          }, transitionDuration);

          if(show){
              childrenDiv.current.style.height = "auto"
              const height = childrenDiv.current.getBoundingClientRect().height
              childrenDiv.current.style.height = '0px'
              childrenDiv.current.getBoundingClientRect()
              childrenDiv.current.style.height = height + 'px'
              const afterUnfold = ()=>{
                if(!childrenDiv.current)return
                childrenDiv.current.style.height = "auto"
                childrenDiv.current.removeEventListener("transitionend",afterUnfold)
              }
              childrenDiv.current.addEventListener('transitionend',afterUnfold)
          }else{
              const height = childrenDiv.current.getBoundingClientRect().height
              childrenDiv.current.style.height = height + 'px'
              childrenDiv.current.getBoundingClientRect()
              childrenDiv.current.style.height = '0px'
          }

        }
      })
  
      return <div key={treeItem.text} className={sc({['level-'+level]:true,item:true})}>
        <div className={sc('text')}>
          <label>
            <input type='checkBox' 
                   checked={checkedBoolean} 
                   onChange={fnOnChange}/>
            {treeItem.value}
          </label>
          { treeItem.children ? show ? <span onClick={unfold}>-</span> : <span onClick={fold}>+</span> : ''}
        </div>
        <div className={sc('unfold')} ref={childrenDiv}>
          {treeItem.children && treeItem.children.map(item =>
            <TreeItem treeItem={item}
                      level={level+1}
                      treePops={treePops}
                      key={item.value}/>)}
        </div>
          
      </div>
}

export default TreeItem
