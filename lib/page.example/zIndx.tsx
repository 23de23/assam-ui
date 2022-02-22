import React from "react"

const zIndex:React.FunctionComponent = ()=>{
  return(
    <div>
      <section>
        <h1>ZIndex 层级规范</h1>
        <text>Assam 使用了较为保守的层级设置以确保用户可以轻松覆盖原样式。</text>
      </section>

      <table className='zIndexBox'>
        <thead>
          <tr>
            <th>Component</th>
            <th>zIndex</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return (
                <tr key={index}>
                  <td>{item.Component}</td>
                  <td>{item.zIndex}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

const data =[
  {Component:'Cascader',zIndex:'80'},
  {Component:'DatePicker',zIndex:'80'},
  {Component:'Menu',zIndex:'80'},
  {Component:'Popover',zIndex:'90'},
  {Component:'Affix',zIndex:'100'},
  {Component:'LightUp',zIndex:'100'},
  {Component:'Message',zIndex:'100'},
  {Component:'Modal',zIndex:'100'}
]


export default zIndex