import React, {Fragment, ReactElement, ReactNode } from "react"


import { Icon } from "../index"
import {scopedClassMaker} from '../helpers/classes'

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
    console.log('mask点击关闭')
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
        {footer && footer.length>0 &&
          <footer className={sc('footer')}>
            {footer && footer.map((item,index)=>React.cloneElement(item,{key:index}))}
          </footer>
        }
      </div>
    </Fragment>:
    null
  return (
    ReactDOM.createPortal(node, document.body)
  )
}

const modal = (content:ReactNode,footer?:Array<React.ReactElement>,afterClose?:()=>void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = 
    <Dialog 
      visible={true}
      footer={footer} 
      onClose={()=>{
        close()
        afterClose && afterClose()
      }}>
      {content}
    </Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
  return close
}

const alert = (content:string)=>{
  const footer = [<button onClick={()=>{close()}}>确定</button>]
  const close = modal(content,footer)
}

const confirm = (content:string, yes?:() => void, no?:() => void)=>{
  const onYes = () => {
    close()
    yes && yes()
  }
  const onNo = () => {
    close()
    no && no()
  }
  const  footer = [
     <button onClick={onYes}>确认</button>,
     <button onClick={onNo}>取消</button>
  ]
  const close = modal(content,footer,no)
}


Dialog.defaultProps = {
  closeOnClickMask : true
}

export {alert,confirm,modal}
export default Dialog