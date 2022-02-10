import React from "react"

import Icon from './icon'


import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    return(
        <ul className={sc('list')}>
            <li>
                <Icon name='Aim'/>
                <span>Aim</span>
            </li>
            <li>
                <Icon name='CaretDown'/>
                <span>CaretDown</span>
            </li>
            <li>
                <Icon name='CaretLeft'/>
                <div>CaretLeft</div>
            </li>
            <li>
                <Icon name='CaretRight'/>
                <div>CaretRight</div>
            </li>
            <li>
                <Icon name='CaretUp'/>
                <div>CaretUp</div>
            </li>
            <li>
                <Icon name='Backward'/>
                <span>Backward</span>
            </li>
            <li>
                <Icon name='FastBackward'/>
                <div>FastBackward</div>
            </li>
            <li>
                <Icon name='FastForward'/>
                <div>FastForward</div>
            </li>
            <li>
                <Icon name='Forward'/>
                <div>Forward</div>
            </li>
            <li>
                <Icon name='StepBackward'/>
                <div>StepBackward</div>
            </li>
            <li>
                <Icon name='StepForward'/>
                <div>StepForward</div>
            </li>
            <li>
                <Icon name='SwapLeft'/>
                <div>SwapLeft</div>
            </li>
            <li>
                <Icon name='SwapRight'/>
                <div>SwapRight</div>
            </li>
        </ul>
    )
}

export default IconExample
