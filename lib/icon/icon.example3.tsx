import React from "react"

import Icon from './icon'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    return(
        <ul className={sc('list')}>
            {["Audit","Diff","FileCopy","FileImage","FileMarkdown","FilePdf","FilePpt","FileText","FileUnknown","FileWord","FileZip","Folder","FolderOpen","Insurance","Like","Lock","Mobile","PropertySafety","SafetyCertificate","SecurityScan","Tablet","Unlike","Unlock","Code","Loading"].map((name)=>{
                return(
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
