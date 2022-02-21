import React, { Fragment } from "react"

import Button from './button'

 const ButtonExample1:React.FunctionComponent = ()=>{
    return(
      <Fragment>
        <Button style={{marginRight:20}}>normal</Button>
        <Button style={{marginRight:20}} level="important">important</Button>
        <Button style={{marginRight:20}} level="dashed">dashed</Button>
        <Button style={{marginRight:20}} level="danger">danger</Button>
      </Fragment>
    )
}

const ButtonExample1_codeString = `
  <Button>normal</Button>
  <Button level="important">important</Button>
  <Button level="dashed">dashed</Button>
  <Button level="danger">danger</Button>
`

export default ButtonExample1
export {ButtonExample1_codeString}
