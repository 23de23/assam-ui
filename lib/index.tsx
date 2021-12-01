// import React from "react";
// import ReactDOM from "react-dom";

// import Icon from './icon/icon'   

// const fn: React.MouseEventHandler = (e)=>{
//     console.log(e.target)
// }

// ReactDOM.render(
//     <div>
//         <Icon className='qqq' name='alipay' onClick={fn} onMouseEnter={()=>{console.log(123)}} onMouseLeave={()=>{console.log(345)}}/>
//     </div>
//     ,document.getElementById('root'))

export {default as Icon} from './icon/icon' //引入并且导出
import './index.scss'