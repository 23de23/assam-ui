import React, { MutableRefObject } from "react";

interface Props{
  targetref:MutableRefObject<Element|null>
}

const Position:React.FunctionComponent<Props> = (props)=>{
  console.log(props.targetref)
  return (
    <div>123</div>
  )
}
export default Position