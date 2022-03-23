import React from "react"

import Icon from './icon'
import {copyToClip} from '../helpers/utils'
import message from "../message/message"



import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    const handlClick = (name:string)=>{
        return (
            ()=>{
                copyToClip(`<Icon name={${name}}/>`)
                message.success({
                    content:`<Icon name={${name}}/>  copied`
                })
            }
        )
    }
    return(
        <ul className={sc('list')}>
            {["Aim","CaretDown","CaretLeft","CaretRight","CaretUp","Backward","FastBackward","FastForward","Forward","StepBackward","StepForward","SwapLeft","SwapRight"].map((name)=>{
                return (
                    <li key={name} onClick={handlClick(name)}>
                        <span className={sc('iconBox')}><Icon name={name}/></span>
                        <span>{name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default IconExample
