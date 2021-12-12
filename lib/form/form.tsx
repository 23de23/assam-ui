import Input from "@lib/input/input"
import React, { ReactFragment } from "react"

import './form.scss'

export interface anyObject{
  [k:string]:any
}

interface Props{
  value:anyObject,
  fields:Array<{name:string,label:string,input:{type:string}}>,
  buttons:ReactFragment,
  onSubmit:React.FormEventHandler<HTMLFormElement>,
  onChange:(newForm:anyObject) => void,
  errors:{[k:string]:Array<string>}
}

const Form:React.FunctionComponent<Props> = (props) => {
  const {fields,buttons,value,onChange,errors} = props
  const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    props.onSubmit(e)
  }
  const onInputChange = (name:string,e:React.ChangeEvent<HTMLInputElement>) =>{
    const newForm = {...value,[name]:e.target.value}
    console.log(newForm)
    onChange(newForm)
  }

  return(
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          {fields.map((f)=>
            <tr key={f.name}>
              <td>
                <span>{f.label}</span>
              </td>
              <td>
                <Input type={f.input.type} 
                    onChange={onInputChange.bind(null,f.name)}>
                </Input>
                <div>{errors[f.name]}</div>
              </td>
            </tr>
          )}
          <div>
            {buttons}
          </div>
        </tbody>
      </table>
    </form>
  )
}

export default Form