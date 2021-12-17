import React from "react"
import {scopedClassMaker} from '../helpers/classes'
import './tree.scss'
const sc = scopedClassMaker('assam-tree')

interface treeDataItem{
  text:string,
  value:string,
  children?:treeDataItem[]
}
interface Props{
  treeData:treeDataItem[],
  treeCheakArr:string [],
  onChange:(value:string,checked:boolean) => void
}

const True:React.FunctionComponent<Props> = (props) => {
  const {treeData,treeCheakArr,onChange} = props

  const x = (treeItem:treeDataItem,level=0) => {
    return <div key={treeItem.text} className={sc({['level-'+level]:true,item:true})}>
      <div className={sc('text')}>
        <input type='checkBox' checked={treeCheakArr.indexOf(treeItem.value)>=0} onChange={(e) => onChange(treeItem.value,e.target.checked)}></input>
        {treeItem.value}
      </div>
      {treeItem.children && treeItem.children.map(item => x(item,level+1))}
    </div>
  }

  return(
    <div className={sc('')}>
      {treeData.map(item=>{
        return x(item)
      })}
    </div>
  )
}

export default True