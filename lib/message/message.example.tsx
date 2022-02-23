import React from "react";
import Message from './message'
import Button from "../button/button";

const MessageExample = ()=>{

  const info = ()=>{
    Message.info('This is a normal message');
  }
  const success = ()=>{
    Message.success('This is a success message');
  }
  const waring = ()=>{
    Message.waring('This is a warning message');
  }
  const error = ()=>{
    Message.error('This is an error message');
  }

  return(
    <div>
      <Button onClick={info}>info</Button>
      <Button onClick={success}>success</Button>
      <Button onClick={waring}>waring</Button>
      <Button onClick={error}>error</Button>
    </div>
  )
}


export default MessageExample