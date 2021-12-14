import Input from "@lib/input/input"
import React, { ReactFragment } from "react"

import './form.scss'
import { scopedClassMaker } from "../helpers/classes"

export interface anyObject{
  [k:string]:any
}

interface Props{
  value:anyObject,
  fields:Array<{name:string,label:string,input:{type:string}}>,
  buttons:ReactFragment,
  onSubmit:React.FormEventHandler<HTMLFormElement>,
  onChange:(newForm:anyObject) => void,
  errors:{[k:string]:Array<string>},
  errorsDisplayMode?:'first' | 'all'
}

const sc = scopedClassMaker('assam-form')

const Form:React.FunctionComponent<Props> = (props) => {
  const {fields,buttons,value,onChange,errors,errorsDisplayMode} = props
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
            <tr key={f.name} className={sc('tr')}>
              <td className={sc('td')}>
                <span className={sc('label')}>{f.label}</span>
              </td>
              <td className={sc('td')}>
                <Input type={f.input.type} 
                    onChange={onInputChange.bind(null,f.name)}>
                </Input>
                <div className={sc('error')}>
                  {errors[f.name] 
                  ? (errorsDisplayMode === 'first' ? errors[f.name] && errors[f.name][0] : errors[f.name] && errors[f.name].join('，')) 
                  : <span>&nbsp;</span>}
                </div>
              </td>
            </tr>
          )}
            <tr>
              <td className={sc('td')}/>
              <td className={sc('td')}>
                {buttons}
              </td>
            </tr>
        </tbody>
      </table>
    </form>
  )
}

Form.defaultProps = {
  errorsDisplayMode:'first'
}

export default Form