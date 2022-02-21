import React from 'react'
import "./apiBox.scss"

interface Props{
  data:{attribute:string,content:string,type:string,default:string}[]
}

const ApiBox:React.FunctionComponent<Props> = (props)=>{
  return(
    <div>
      <table className='apiBox'>
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((item,index)=>
              (
                <tr key={index}>
                  <td>{item.attribute}</td>
                  <td>{item.content}</td>
                  <td>{item.type}</td>
                  <td>{item.default}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ApiBox