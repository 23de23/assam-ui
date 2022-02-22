import React from "react"
import Button from "../button/button"
import CodeBox from "../component.example/codeBox"

const buttonExample = ()=>{
  return(
    <Button level="important">important</Button>
  )
}
const code = `
  import  {  Button  }  from  'assam-ui'
  <Button level="important">important</Button>

  <Button  type="primary">Primary</Button>
`

const startUsing:React.FunctionComponent = ()=>{
  return(
    <div>
      <section>
        <h1>开始使用</h1>
        <p>
          <text>Assam 已发布至 NPM，您可以使用 npm / yarn 来安装。</text>
          <br />
          <br />
          <span style={{"fontWeight": 600}}>$ npm install Assam</span>
          <br />
          <span style={{"fontWeight": 600}}>$ yarn add Assam</span>
        </p>
      </section>
      <section>

      <h2>简单示例</h2>
        <CodeBox
          title="使用 Button"
          text="使用 Assam 按钮组件。"
          egComponent={buttonExample}
          code={code}
          visible
          />
      </section>
    </div>
  )
}


export default startUsing