import React from "react"
import './button.scss'
import Icon  from "../icon/icon"
import {scopedClassMaker} from '../helpers/classes'


interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  level?: 'important' | 'danger' | 'dashed' | 'normal',
  icon?:string,
  position?: 'left' | 'right',
  disabled?: true | false,
  loading?: true | false,
  size?: 'small' | 'medium' | 'large',
  ghost?: boolean,
}

const sc = scopedClassMaker('assam-button')
const Button = React.forwardRef<unknown, Props>((props, ref:any) => {
  const {className,level,icon,position,loading,size,ghost,...restProps} = props
  return (
    <button {...restProps} ref={ref} className={sc({['']:true,[level ? level : '']:true,[loading ? "loading" : ""]:true,[size ? size : '']:true,[ghost ? 'ghost' : '']:true},{extra:className})}>
      {
        loading ? 
          <Icon style={{order:position =='right'? 2 : 0}} name="Loading"/> :
          icon ? 
            <Icon style={{order:position =='right'? 2 : 0}} name={icon}/> : ''
      }
      {props.children}
    </button>
  )
}
)

Button.defaultProps = {
  level: 'normal',
  position: 'left',
  disabled: false,
  loading: false,
  size: "medium",
  ghost: false
};

export default Button