import React, { ReactNode } from "react"

import { scopedClassMaker } from "../helpers/classes"
import './input.scss'

interface Porps extends React.InputHTMLAttributes<HTMLElement>{
    size?: "large" | "small" | "default",
    prefix ?: ReactNode,
    suffix ?: ReactNode,
}

const sc = scopedClassMaker('assam-input')

const Input:React.FunctionComponent<Porps> = (props) => {
    const {className,style,size,prefix,suffix,...restProps} = props
    return(
        <span className={sc({'wrapper':true,[size!]:true},{extra:className})} style={style}>
            {prefix && <div className={sc('iconLeft')}>
                {prefix}
            </div>}
            <input {...restProps} className={sc({['']:true,"suffix":suffix ? true : false},{extra:className})}></input>
            {suffix && <div className={sc('iconRight')}>
                {suffix}
            </div>}
        </span>
    )
}

Input.defaultProps = {
    size:'default'
}

export default Input