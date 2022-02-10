import React,{ Fragment } from "react"
import CodeVisible from '../../codeVIsible'
import IconExample1 from "./icon.example1"


const IconCodeVisible = () =>{
    return(
        <Fragment>
            <CodeVisible code={require('!!raw-loader!./icon.example1.tsx').default}>
                <IconExample1></IconExample1>
            </CodeVisible>
        </Fragment>
    )
}

export default IconCodeVisible