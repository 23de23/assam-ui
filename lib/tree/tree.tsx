import React from "react"
import {scopedClassMaker} from '../helpers/classes'
import './tree.scss'
import TreeItem from './tree-item'
const sc = scopedClassMaker('assam-tree')


const Tree:React.FunctionComponent<treePops> = (props) => {
  return(
    <div className={sc('')}>
      {props.treeData.map(item=>
        <TreeItem treeItem={item}
                  level={0}
                  treePops={props}
                  key={item.value}/>
      )}
    </div>
  )
}

export default Tree