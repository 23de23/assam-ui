import React from "react"
import {scopedClassMaker} from '../helpers/classes'
import './tree.scss'
import TreeItem from './tree-item'
const sc = scopedClassMaker('assam-tree')


const Tree:React.FunctionComponent<treePops> = (props) => {
  
  const itemOnChange = (selectedList:string[]) => {
    if(props.multiple) props.onChange(selectedList)
  }
  return(
    <div className={sc('')}>
      {props.treeData.map(item=>
        <TreeItem treeItem={item}
                  level={0}
                  treePops={props}
                  itemOnChange={itemOnChange}
                  key={item.value}/>
      )}
    </div>
  )
}

Tree.defaultProps = {
  checkStrictly:false
}

export default Tree