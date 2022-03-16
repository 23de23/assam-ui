import React, {Fragment, ReactElement, ReactNode, useEffect } from "react"


import { Icon } from "../index"
import Button from "../button/button"

import {scopedClassMaker} from '../helpers/classes'

import './modal.scss'
import ReactDOM from "react-dom"

interface dialogProps {
  title?: string,
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

const Modal: React.FunctionComponent<dialogProps> = (props) => {

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

  const transitionShowStyle = {
    transition: 'all 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
    opacity: 1,
    top: '30%',
    transform: 'translateX(-25%) translateY(-25%) scale(1)'
  }
  const transitionHidenStyle = {
    transition: 'all 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
    opacity: 0,
    top: '50%',
    transform: 'translateX(-25%) translateY(-25%) scale(0)'
  }

  useEffect(()=>{
    console.log('开始');
    return ()=>{console.log('结束');}
  },[])

  const node =
    visible ? 
    <Fragment>
      {visible && <div className={sc('mask')} onClick={onClickMask}> </div>}
      
      <div className={sc('')} style={visible ? transitionShowStyle : transitionHidenStyle}>
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
    </Fragment>
    : null
  return (
    ReactDOM.createPortal(node, document.body)
    
  )
}

const opemModal = (data:ModalProps) => {
  const {content,footer,afterClose,title} = data
  const close = () => {
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = 
    <Modal
      title={title!}
      visible={true}
      footer={footer}
      onClose={()=>{
        close()
        afterClose && afterClose()
      }}>
      {content}
    </Modal>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
  return close
}

const alert = (data:alertProps)=>{
  const {title,content} = data
  const footer = [<Button level="important" onClick={()=>{close()}}>知道了</Button>]
  const close = opemModal({content,footer,title})
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
  const close = opemModal({title,content,footer,afterClose:onOk})
}


Modal.defaultProps = {
  closeOnClickMask : true
}

export {alert,confirm,opemModal}
export default Modal