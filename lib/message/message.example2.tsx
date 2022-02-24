import React from "react";
import Button from "../button/button";
import Message from './message'


const MessageExample2 = ()=>{

  const info = ()=>{
    Message.info({
      content:'This is a normal message',
      center:true
    });
  }

  return(
    <div>
        <Button style={{marginRight:20}} onClick={info}>content center</Button>
    </div>
  )
}

const messageExample2_codeString = `
        <Button onClick={info}>content center</Button>

        const info = ()=>{
          Message.info({
            content:'This is a normal message',
            center:true
          });
        }
`

export default MessageExample2
export {messageExample2_codeString}