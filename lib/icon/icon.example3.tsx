import React from "react"

import Icon from './icon'

import { scopedClassMaker } from "../helpers/classes"
const sc = scopedClassMaker('example-icon')
 const IconExample:React.FunctionComponent = ()=>{
    return(
        <ul className={sc('list')}>
            <li>
                <Icon name='Audit'/>
                <span>Audit</span>
            </li>
            <li>
                <Icon name='Diff'/>
                <span>Diff</span>
            </li>
            <li>
                <Icon name='FileCopy'/>
                <div>FileCopy</div>
            </li>
            <li>
                <Icon name='FileImage'/>
                <div>FileImage</div>
            </li>
            <li>
                <Icon name='FileMarkdown'/>
                <div>FileMarkdown</div>
            </li>
            <li>
                <Icon name='FilePdf'/>
                <span>FilePdf</span>
            </li>
            <li>
                <Icon name='FilePpt'/>
                <div>FilePpt</div>
            </li>
            <li>
                <Icon name='FileText'/>
                <div>FileText</div>
            </li>
            <li>
                <Icon name='FileUnknown'/>
                <div>FileUnknown</div>
            </li>
            <li>
                <Icon name='FileWord'/>
                <div>FileWord</div>
            </li>
            <li>
                <Icon name='FileZip'/>
                <div>FileZip</div>
            </li>
            <li>
                <Icon name='Folder'/>
                <div>Folder</div>
            </li>
            <li>
                <Icon name='FolderOpen'/>
                <div>FolderOpen</div>
            </li>
            <li>
                <Icon name='Insurance '/>
                <div>Insurance </div>
            </li>
            <li>
                <Icon name='Like'/>
                <div>Like</div>
            </li>
            <li>
                <Icon name='Lock'/>
                <div>Lock</div>
            </li>
            <li>
                <Icon name='Mobile'/>
                <div>Mobile</div>
            </li>
            <li>
                <Icon name='PropertySafety'/>
                <div>PropertySafety</div>
            </li>
            <li>
                <Icon name='SafetyCertificate'/>
                <div>SafetyCertificate</div>
            </li>
            <li>
                <Icon name='SecurityScan'/>
                <div>SecurityScan</div>
            </li>
            <li>
                <Icon name='Tablet'/>
                <div>Tablet</div>
            </li>
            <li>
                <Icon name='Unlike'/>
                <div>Unlike</div>
            </li>
            <li>
                <Icon name='Unlock'/>
                <div>Unlock</div>
            </li>
        </ul>
    )
}

export default IconExample
