import React from "react";
import MessageExample1, {messageExample1_codeString} from './message.example1'
import MessageExample2, {messageExample2_codeString} from './message.example2'
import CodeBox from "../component.example/codeBox";
import ApiBox from "../component.example/apiBox"


const apiArry = [
  {attribute:'content',content:'	内容',type:'string',default:'——'},
  {attribute:'duration',content:'自动关闭的延时，单位：毫秒。设为 0 时不自动关闭',type:"number",default:"3"},
  {attribute:'typetop',content:'消息距离顶部的位置',type:"	'number' | 'string'",default:"8%"},
  {attribute:'showIcon',content:'是否显示默认的提示 Icon 图标',type:"boolean",default:"true"},
  {attribute:'onClose',content:'消息完全关闭（离场动画结束）时的回调',type:"() => any",default:"——"},
  {attribute:'center',content:'文字是否居中',type:"boolean",default:"false"},
  {attribute:'className',content:'自定义 Message 类名',type:'string',default:'———'},
  {attribute:'style',content:'自定义 Message 样式',type:'React.CSSProperties',default:'———'},
]

const MessageExample = ()=>{

  return(
    <div>
      
      <section>
          <h1>Message 全局提示</h1>
          <p>全局展示反馈信息。</p>
      </section>
      <section>
          <h2>何时使用</h2>
          <ul style={{listStyleType:"circle",marginLeft:20}}>
              <li><p>可提供成功、警告和错误等反馈信息。</p></li>
              <li><p>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</p></li>
          </ul>
      </section>
      <section>
          <h2>代码演示</h2>
      </section>

      <CodeBox
          title="基本用法。"
          text="通过调用 Message 的静态方法：info()、success()、warning()、error() 并传递 options 参数来使用。具体属性设置见 Options。"
          egComponent={MessageExample1}
          code={messageExample1_codeString}
      />

      <CodeBox
          title="文字居中。"
          text="使用 center 属性让文字水平居中。"
          egComponent={MessageExample2}
          code={messageExample2_codeString}
      />

      <ApiBox data={apiArry}></ApiBox>

    </div>
  )
}


export default MessageExample