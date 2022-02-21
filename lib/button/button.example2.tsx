import React, { Fragment, useState } from "react"

import Button from './button'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example2-button')

 const ButtonExample2:React.FunctionComponent = ()=>{
    const [loading,setLoading]  = useState(true)
    const click = () => {
      setLoading(!loading)
    }
    return(
      <Fragment>
        <Button disabled={true} style={{marginRight:20}}>Disabled</Button>
        <Button className={sc('')} loading={true} level="important" style={{marginRight:20}}>Loading</Button>
        <Button className={sc('')} icon="Aim" loading={loading} level="important" onClick={click} style={{marginRight:20}}>Click me</Button>
      </Fragment>
    )
}

const ButtonExample2_codeString = `
  import React, { useState } from "react"
  const [loading,setLoading]  = useState(true)
  const click = () => {
    setLoading(!loading)
  }

  <Button disabled={true}>Disabled</Button>
  <Button loading={true} level="important">Loading</Button>
  <Button icon="Aim" loading={loading} level="important" onClick={click}>Click me</Button>
`

export {ButtonExample2_codeString}

export default ButtonExample2
