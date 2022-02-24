import React from "react";
import Button from "../button/button";
import Message from './message'


const MessageExample1 = ()=>{

  const info = ()=>{
    Message.info({
      content:'This is a normal message'
    });
  }
  const success = ()=>{
    Message.success({
      content:'This is a success message'
    });
  }
  const waring = ()=>{
    Message.waring({
      content:'This is a warning message'
    });
  }
  const error = ()=>{
    Message.error({
      content:'This is an error message'
    });
  }

  return(
    <div>
        <Button style={{marginRight:20}} onClick={info}>info</Button>
        <Button style={{marginRight:20}} onClick={success}>success</Button>
        <Button style={{marginRight:20}} onClick={waring}>waring</Button>
        <Button style={{marginRight:20}} onClick={error}>error</Button>
    </div>
  )
}

const messageExample1_codeString = `
        <Button onClick={info}>info</Button>
        <Button onClick={success}>success</Button>
        <Button onClick={waring}>waring</Button>
        <Button onClick={error}>error</Button>

        const info = ()=>{
          Message.info({
            content:'This is a normal message'
          });
        }
        const success = ()=>{
          Message.success({
            content:'This is a success message'
          });
        }
        const waring = ()=>{
          Message.waring({
            content:'This is a warning message'
          });
        }
        const error = ()=>{
          Message.error({
            content:'This is an error message'
          });
        }
`

export default MessageExample1
export {messageExample1_codeString}