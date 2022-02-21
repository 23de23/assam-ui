import React, { Fragment } from "react"

import Button from './button'

 const ButtonExample1:React.FunctionComponent = ()=>{
    return(
      <Fragment>
        <Button icon="Aim" style={{marginRight:20}}>left</Button>
        <Button icon="Aim" position="right" style={{marginRight:20}}>right</Button>
      </Fragment>
    )
}

export default ButtonExample1
