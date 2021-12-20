import React, { ChangeEventHandler, useState } from "react"
import {scopedClassMaker} from '../helpers/classes'
import useUpdate from "../hooks"
const sc = scopedClassMaker('assam-tree')

  interface Props {
    treeItem:treeDataItem,
    level:number,
    treePops:treePops
  }

const TreeItem:React.FunctionComponent<Props> = (props) => {
    console.log("render")
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
        setShow(!show)
      }
      const fold = () => {
        setShow(!show)
      }

      
      useUpdate(show,()=>{
        console.log("show变化了",show)
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
        <div className={sc({unfold:!show})}>
          {treeItem.children && treeItem.children.map(item =>
            <TreeItem treeItem={item}
                      level={level+1}
                      treePops={treePops}
                      key={item.value}/>)}
        </div>
          
      </div>
}

export default TreeItem