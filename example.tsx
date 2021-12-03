import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Link,Route} from 'react-router-dom'

import IconExample from './lib/icon/icon.Example'
import DialogExample from './lib/dialog/dialog.Example'
import ButtonExample from './lib/button/button.example'
import LayoutExample from './lib/layout/layout.example'

ReactDOM.render((
    <Router>
        <div>
            <header>
                <div className="logo">eatui12329</div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to='/icon'>Icon</Link>
                        </li>
                        <li>
                            <Link to='/button'>Button</Link>
                        </li>
                        <li>
                            <Link to='/dialog'>Dialog</Link>
                        </li>
                        <li>
                            <Link to='/layout'>Layout</Link>
                        </li>
                    </ul>
                </aside>
                <main>
					<Route path="/icon" component={IconExample}/>
					<Route path="/button" component={ButtonExample}/>
					<Route path="/dialog" component={DialogExample}/>
					<Route path="/Layout" component={LayoutExample}/>
                </main>
            </div>
        </div>
    </Router>
),document.getElementById('root'))
