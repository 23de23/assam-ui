import React from "react"
import Scroll from "./scroll"


const scrollExample1 = () => {
  return(
    <Scroll style={{height:300, width:'100%', border:'1px solid rgba(0,0,0,0.15)'}}>
      <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p>
      <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p>
      <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p>
      <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p>
    </Scroll>
  )
}


const scrollExample1_codeString = `
  123
`

export default scrollExample1
export {scrollExample1_codeString}