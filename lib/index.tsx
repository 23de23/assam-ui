import React from "react";
import ReactDOM from "react-dom";

import Icon from './icon'   

const fn: React.MouseEventHandler = (e)=>{
    console.log(e.target)
}

ReactDOM.render(
    <div>
        <Icon className='qqq' name='alipay' onClick={fn} onMouseEnter={()=>{console.log(123)}} onMouseLeave={()=>{console.log(345)}}/>
        {/* <Icon name='qq'/>
        <Icon name='wechat'/> */}
    </div>
    ,document.getElementById('root'))