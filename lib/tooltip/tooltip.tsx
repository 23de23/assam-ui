import React, { Fragment } from "react";

interface Props{

}

const tooltip:React.FunctionComponent<Props> = (props)=>{
  console.log(props.children)
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default tooltip