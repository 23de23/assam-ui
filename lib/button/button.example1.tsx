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

export default ButtonExample1
