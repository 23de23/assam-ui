import React from "react"
import './button.scss'
import {scopedClassMaker} from '../helpers/classes'


interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  level?: 'important' | 'danger' | 'normal'
}

const sc = scopedClassMaker('assam-button')

const Button:React.FunctionComponent<Props> = (props) => {
  const {className,level,...restProps} = props
  return (
    <button {...restProps} className={sc({['']:true,[level ? level : '']:true},{extra:className})}></button>
  )
}

Button.defaultProps = {
  level: 'normal'
};

export default Button