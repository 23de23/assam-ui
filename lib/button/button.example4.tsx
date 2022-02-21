import React, { Fragment } from "react"

import Button from './button'

 const ButtonExample4:React.FunctionComponent = ()=>{
    return(
      <Fragment>
        <Button ghost={true} style={{marginRight:20}}>normal</Button>
        <Button ghost={true} style={{marginRight:20}} level="important">important</Button>
        <Button ghost={true} style={{marginRight:20}} level="dashed">dashed</Button>
        <Button ghost={true} style={{marginRight:20}} level="danger">danger</Button>
      </Fragment>
    )
}

const ButtonExample4_codeString = `
  <Button ghost={true}>normal</Button>
  <Button ghost={true}  level="important">important</Button>
  <Button ghost={true}  level="dashed">dashed</Button>
  <Button ghost={true}  level="danger">danger</Button>
`

export {ButtonExample4_codeString}

export default ButtonExample4
