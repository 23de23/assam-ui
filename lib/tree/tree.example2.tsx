import React, { useState } from "react"

import Tree from './tree'

const TreeExample2 = () => {
  const [selected,setSelected] = useState('0-1-1-1')
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
            multiple={false}></Tree>
    </div>
  )
}

const treeExample2_codeString = `
123
`

export default TreeExample2
export {treeExample2_codeString}