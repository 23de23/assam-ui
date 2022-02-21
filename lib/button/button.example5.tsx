import React, { Fragment } from "react"

import Button from './button'

 const ButtonExample5:React.FunctionComponent = ()=>{
    return(
      <Fragment>
        <Button size="small" level="important" style={{marginRight:20}}>small</Button>
        <Button size="medium" level="important" style={{marginRight:20}}>medium</Button>
        <Button size="large" level="important" style={{marginRight:20}}>large</Button>
      </Fragment>
    )
}

export default ButtonExample5
