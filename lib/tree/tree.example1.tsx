import React, { useState } from "react"

import Tree from './tree'

const TreeExample1 = () => {
  const [selected,setSelected] = useState(['0-0','0-0-1','0-0-1-1','0-1','0-1-1','0-1-1'])
  const [treeData] = useState([
    { text: '0-0', 
      value: '0-0', 
      children: [{ 
        text: '0-0-1', 
        value: '0-0-1',
        disabled:true,
        children: [{ 
            text: '0-0-1-1', 
            value: '0-0-1-1',
            disabled:true,
          }, { 
            text: '0-0-1-2', 
            value: '0-0-1-2' }] 
          }] 
    },
    { text: '0-1', 
      value: '0-1', 
      children: [{ 
        text: '0-1-1', 
        value: '0-1-1', 
        children: [{ 
          text: '0-1-1-1', 
          value: '0-1-1-1' 
        }, { 
          text: '0-1-1-2', 
          value: '0-1-1-2' }] 
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

const treeExample1_codeString = `
123
`

export default TreeExample1
export {treeExample1_codeString}