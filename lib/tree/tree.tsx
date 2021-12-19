import React, { ChangeEventHandler, useState } from "react"
import {scopedClassMaker} from '../helpers/classes'
import './tree.scss'
const sc = scopedClassMaker('assam-tree')

interface treeDataItem{
  text:string,
  value:string,
  children?:treeDataItem[]
}

type Props = {
  treeData:treeDataItem[],
} & ({
  multiple: true,
  selected: string[],
  onChange: (values: string[]) => void
} | {
  multiple?: false,
  selected: string,
  onChange: (values: string) => void
})

const True:React.FunctionComponent<Props> = (props) => {

  const {treeData,selected,onChange,multiple} = props

  if(multiple){
    console.log(selected)
  }

  if(props.multiple){
    console.log(props.selected)
  }

  const randerItem = (treeItem:treeDataItem,level=0) => {

    const fnOnChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      if(props.multiple === true){
        if(e.target.checked){
          props.onChange([...props.selected,treeItem.value])
        }else{
          props.onChange(props.selected.filter((i)=>i !== treeItem.value))
        }
      }else{
        const aa = treeItem.value === selected ? '' : treeItem.value
        props.onChange(aa)
      }
    }

    const checkedBoolean = multiple ? selected.indexOf(treeItem.value)>=0 : treeItem.value===selected

    const [show,setShow] = useState(true)
    const unfold = () => {
      setShow(!show)
    }
    const fold = () => {
      setShow(!show)
    }

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
        {treeItem.children && treeItem.children.map(item => randerItem(item,level+1))}
      </div>
        
    </div>
  }

  return(
    <div className={sc('')}>
      {selected}
      {treeData.map(item=>{
        return randerItem(item)
      })}
    </div>
  )
}

export default True