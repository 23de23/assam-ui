import React, { Fragment, useState } from "react"
import Button from "../button/button"

import Form, { anyObject } from "./form"
import validator from "./validator"

const FormExample:React.FunctionComponent = () => {
  const [formData, serFormData] = useState<anyObject>({
    username:'',
    password:''
  })
  const fields = [
    {name: 'username', label: '用xxxx户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]
  const [errors,setErrors] = useState({})

  const UrlName = (key:string,success:(str?:any)=>void,fill:(tips:string)=>void) => {
    const userArr = ['张三','李四','王老五','aaa']
    setTimeout(() => {
      userArr.includes(key) ? fill('名字重复了大哥') : success()
    }, 1000);
  }
  const userValidator = (key:string):Promise<string> =>{
    return new Promise((res,rej) => {
      UrlName(key,res,rej)
    })
  }

  const onSubmit = () => {
    const rules = [
      {key:'username',required:true},
      {key:'username',minLength:2,maxLength:5},
      {key:'username',pattern:/^[A-Za-z0-9]+$/},
      {key:'username',validator:userValidator},

      {key:'password',required:true},
      {key:'password',minLength:2,maxLength:5},
      {key:'password',pattern:/^[A-Za-z0-9]+$/}
    ]
    validator(formData,rules,(errors)=>{
      setErrors(errors)
    })
  }


  return(
    <div>
      <Form value={formData} fields={fields}
            buttons={
              <Fragment>
                <Button type='submit' level='important'>提交</Button>
                <Button>返回</Button>
              </Fragment>
            }
            onChange={(newForm)=>serFormData(newForm)}
            onSubmit={onSubmit}
            errors={errors}
      ></Form>
    </div>
  )
}

export default FormExample