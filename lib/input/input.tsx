import React from "react"

import { scopedClassMaker } from "../helpers/classes"
import './input.scss'

interface Porps extends React.InputHTMLAttributes<HTMLElement>{

}

const sc = scopedClassMaker('assam-input')

const Input:React.FunctionComponent<Porps> = (props) => {
    const {className,...restProps} = props
    return(
        <input {...restProps} className={sc('',{extra:className})}></input>
    )
}

export default Input