import React from "react"

import Icon from './icon'


import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    return(
        <ul className={sc('list')}>
            {["Aim","CaretDown","CaretLeft","CaretRight","CaretUp","Backward","FastBackward","FastForward","Forward","StepBackward","StepForward","SwapLeft","SwapRight"].map((name)=>{
                return (
                    <li key={name}>
                        <span className={sc('iconBox')}><Icon name={name}/></span>
                        <span>{name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default IconExample
