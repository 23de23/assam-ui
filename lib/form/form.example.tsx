import React, { Fragment, useState } from "react"

import Form, { anyObject } from "./form"

const FormExample:React.FunctionComponent = () => {
  const [formData, serFormData] = useState({
    username:'',
    password:''
  })
  const fields = [
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]
  const onSubmit = () => {

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
            onChange={(newFormData:anyObject)=>serFormData(newFormData)}
            onSubmit={onSubmit}
      ></Form>
    </div>
  )
}

export default FormExample