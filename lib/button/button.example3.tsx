import React, { Fragment } from "react"

import Button from './button'

 const ButtonExample3:React.FunctionComponent = ()=>{
    return(
      <Fragment>
        <Button icon="Aim" style={{marginRight:20}}>left</Button>
        <Button icon="Aim" position="right" style={{marginRight:20}}>right</Button>
      </Fragment>
    )
}

const ButtonExample3_codeString = `
  <Button icon="Aim">left</Button>
  <Button icon="Aim" position="right">right</Button>
`

export {ButtonExample3_codeString}

export default ButtonExample3
