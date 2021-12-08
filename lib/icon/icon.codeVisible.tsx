import React,{ Fragment } from "react"
import CodeVisible from '../../codeVIsible'
import IconExample from "./icon.example"


const IconCodeVisible = () =>{
    return(
        <Fragment>
            1
            <CodeVisible code={require('!!raw-loader!./icon.example.tsx').default}>
                <IconExample></IconExample>
            </CodeVisible>
        </Fragment>
    )
}

export default IconCodeVisible