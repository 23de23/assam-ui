import React, { useState } from "react"

import Tree from './tree'

const TreeExample = () => {
  const [treeCheakArr,setTreeCheakArr] = useState(['1','1.1.1','2.1'])
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

  const onChange = (value:string,checked:boolean) => {
    console.log(value+'aaaa'+checked)
    if(checked){
      setTreeCheakArr([...treeCheakArr,value])
    }else{
      const aa = treeCheakArr.filter(i => i!== value)
      setTreeCheakArr(aa)
    }
  }

  return (
    <div style={{width:400}}>
      <Tree treeData={treeData} treeCheakArr={treeCheakArr} onChange={onChange}></Tree>
    </div>
  )
}

export default TreeExample