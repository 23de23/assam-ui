import React, { Fragment } from "react"

import Button from './button'

 const ButtonExample5:React.FunctionComponent = ()=>{
    return(
      <Fragment>
        <Button ghost={true} style={{marginRight:20}}>normal</Button>
        <Button ghost={true} style={{marginRight:20}} level="important">important</Button>
        <Button ghost={true} style={{marginRight:20}} level="dashed">dashed</Button>
        <Button ghost={true} style={{marginRight:20}} level="danger">danger</Button>
      </Fragment>
    )
}

export default ButtonExample5
