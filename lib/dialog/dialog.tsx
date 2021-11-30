import React, { Fragment } from "react"


import { Icon } from "../index"
import {scopedClassMaker} from '../classes'

import './dialog.scss'

interface dialogProps {
  visible: Boolean
}

const scopedClass = scopedClassMaker('assam-dialog')
const sc = scopedClass

const dialog: React.FunctionComponent<dialogProps> = (props) => {
  const { visible,children } = props
  return (
    visible ?
      <Fragment>
        <div className={sc('mask')}>
        </div>
        <div className={sc()}>
          <div className={sc('close')}>
            <Icon name='close'/>
          </div>
          <header className={sc('header')}>
            提示
          </header>
          <main className={sc('main')}>
            {children}
          </main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </Fragment>:
      null
  )
}
export default dialog