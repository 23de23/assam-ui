import React, { Fragment, ReactElement } from "react"


import { Icon } from "../index"
import {scopedClassMaker} from '../classes'

import './dialog.scss'
import ReactDOM from "react-dom"

interface dialogProps {
  visible: Boolean,
  footer?: Array<ReactElement>,
  onClose: React.MouseEventHandler,
  closeOnClickMask?: boolean
}



const scopedClass = scopedClassMaker('assam-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<dialogProps> = (props) => {

  const { visible,children,footer,onClose,closeOnClickMask } = props

  const onClickClose: React.MouseEventHandler = (e)=>{
    onClose(e)
  }
  const onClickMask:React.MouseEventHandler = (e)=>{
    if(closeOnClickMask){
      onClickClose(e)
    }
  }

  const node =visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name='close'/>
        </div>
        <header className={sc('header')}>
          提示
        </header>
        <main className={sc('main')}>
          {children}
        </main>
        <footer className={sc('footer')}>
          {footer && footer.map((item,index)=>React.cloneElement(item,{key:index}))}
        </footer>
      </div>
    </Fragment>:
    null
  return (
    ReactDOM.createPortal(node, document.body)
  )
}

const alert = (content:string)=>{
  const component = <Dialog visible={true} onClose={()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }}>{content}</Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
}

Dialog.defaultProps = {
  closeOnClickMask : true
}

export {Dialog,alert}