import React from "react"

import Icon from './icon'
import message from "../message/message"
import {copyToClip} from '../helpers/utils'

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
            {["Audit","Diff","FileCopy","FileImage","FileMarkdown","FilePdf","FilePpt","FileText","FileUnknown","FileWord","FileZip","Folder","FolderOpen","Insurance","Like","Lock","Mobile","PropertySafety","SafetyCertificate","SecurityScan","Tablet","Unlike","Unlock","Code","Loading","CheckCircle","CloseCircle","WarningCircle","Close"].map((name)=>{
                return(
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
