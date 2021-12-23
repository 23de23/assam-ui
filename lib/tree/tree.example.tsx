import React, { useState } from "react"

import Tree from './tree'

const TreeExample = () => {
  const [selected,setSelected] = useState(['1','1.1','1.1.1','2','2.1','2.1.1','2.1.2'])
  // const [selected,setSelected] = useState(['1','1.1','1.1.1'])
  // const [selected,setSelected] = useState("1")
  const [treeData] = useState([
    { text: '1', 
      value: '1', 
      children: [{ 
        text: '1.1', 
        value: '1.1', 
        children: [{ 
            text: '1.1.1', 
            value: '1.1.1' 
          }, { 
            text: '1.1.2', 
            value: '1.1.2' }] 
          }] 
    },
    { text: '2', 
      value: '2', 
      children: [{ 
        text: '2.1', 
        value: '2.1', 
        children: [{ 
          text: '2.1.1', 
          value: '2.1.1' 
        }, { 
          text: '2.1.2', 
          value: '2.1.2' }] 
      }] 
    }
  ])

  const onChange = (newChecked:any) => {
    setSelected(newChecked)
  }

  return (
    <div style={{width:400}}>
      <Tree treeData={treeData}
            selected={selected}
            onChange={onChange}
            multiple={true}></Tree>
    </div>
  )
}

export default TreeExample