import React, {Fragment, ReactElement, ReactNode } from "react"


import { Icon } from "../index"
import Button from "../button/button"

import {scopedClassMaker} from '../helpers/classes'

import './modal.scss'
import ReactDOM from "react-dom"

interface dialogProps {
  title: string,
  visible: Boolean,
  footer?: Array<ReactElement>,
  onClose: React.MouseEventHandler,
  closeOnClickMask?: boolean
}
interface ModalProps{
  title?: string,
  content: ReactNode,
  footer?: Array<React.ReactElement>,
  afterClose?: ()=>void
}
interface alertProps{
  title?: string,
  content: string | React.ReactElement
}



const scopedClass = scopedClassMaker('assam-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<dialogProps> = (props) => {

  const { title,visible,children,footer,onClose,closeOnClickMask } = props

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
      <div className={sc('')}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name='Close'/>
        </div>
        <header className={sc('header')}>
          {title ? title : '提示'}
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

const modal = (data:ModalProps) => {
  const {content,footer,afterClose,title} = data
  const close = () => {
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = 
    <Dialog
      title={title!}
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

const alert = (data:alertProps)=>{
  const {title,content} = data
  const footer = [<Button level="important" onClick={()=>{close()}}>知道了</Button>]
  const close = modal({content,footer,title})
}

interface confirmProps{
  title?: string,
  content: string | React.ReactElement,
  onCancel: () => void,
  onOk: () => void
}

const confirm = (data:confirmProps)=>{
  const {title,content,onCancel,onOk} = data
  const onYes = () => {
    close()
    onOk && onOk()
  }
  const onNo = () => {
    close()
    onCancel && onCancel()
  }
  const  footer = [
     <Button level="important" onClick={onYes}>确认</Button>,
     <Button onClick={onNo}>取消</Button>
  ]
  const close = modal({title,content,footer,afterClose:onOk})
}


Dialog.defaultProps = {
  closeOnClickMask : true
}

export {alert,confirm,modal}
export default Dialog