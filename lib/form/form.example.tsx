import React, { Fragment, useState } from "react"

import Form, { anyObject } from "./form"
import validator from "./validator"

const FormExample:React.FunctionComponent = () => {
  const [formData, serFormData] = useState<anyObject>({
    username:'',
    password:''
  })
  const fields = [
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]
  const [errors,setErrors] = useState({})
  const onSubmit = () => {
    const rules = [
      {key:'username',required:true},
      {key:'username',minLength:2,maxLength:5},
      {key:'username',pattern:/^[A-Za-z0-9]+$/},

      {key:'password',required:true},
      {key:'password',minLength:2,maxLength:5},
      {key:'password',pattern:/^[A-Za-z0-9]+$/}
    ]
    console.log(validator(formData,rules))
    setErrors(validator(formData,rules))
  }


  return(
    <div>
      <Form value={formData} fields={fields}
            buttons={
              <Fragment>
                <button type='submit'>提交</button>
                <button>返回</button>
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