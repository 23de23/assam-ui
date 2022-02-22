import React from "react"
import './page.example.scss'

const colorMatching:React.FunctionComponent = ()=>{
  return(
    <div>
      <section>
        <h1>Color 色彩搭配</h1>
        <p><text>推荐使用以下颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</text></p>
      </section>

      <section>
        <h2>主色</h2>
        <text>Xue-react 使用友好的蓝色作为主色。</text>
        <div className="colorBox">
          <div className="colorItem" style={{"background":'#40a9ff'}}>
            <div className="colorItem_title">Light</div>
            <div className="colorItem_detail">#40a9ff</div>
          </div>
          <div className="colorItem" style={{"background":'#1890ff'}}>
            <div className="colorItem_title">Primary</div>
            <div className="colorItem_detail">#1890ff</div>
          </div>
          <div className="colorItem" style={{"background":'#096dd9'}}>
            <div className="colorItem_title">Light</div>
            <div className="colorItem_detail">#096dd9</div>
          </div>
        </div>
      </section>


      <section>
        <h2>功能色</h2>
        <text>功能色常用于信息提示，比如成功、警告和失败。</text>
        <div className="colorBox">
          <div className="colorItem" style={{"background":'#52c41a'}}>
            <div className="colorItem_title">Success</div>
            <div className="colorItem_detail">#52c41a</div>
          </div>
          <div className="colorItem" style={{"background":'#faad14'}}>
            <div className="colorItem_title">Warning</div>
            <div className="colorItem_detail">#faad14</div>
          </div>
          <div className="colorItem" style={{"background":'#f5222d'}}>
            <div className="colorItem_title">Error</div>
            <div className="colorItem_detail">#f5222d</div>
          </div>
        </div>
      </section>



      <section>
        <h2>中性色</h2>
        <text>中性色常用于文本、背景、边框、阴影等。</text>
        <div className="colorBox">
          <div className="colorItem" style={{"background":'rgba(0, 0, 0, .62)'}}>
            <div className="colorItem_title">Title</div>
            <div className="colorItem_detail">rgba(0, 0, 0, .85)</div>
          </div>
          <div className="colorItem" style={{"background":'rgba(0, 0, 0, .65)'}}>
            <div className="colorItem_title">Content</div>
            <div className="colorItem_detail">rgba(0, 0, 0, .65)</div>
          </div>
          <div className="colorItem" style={{"background":'rgba(0, 0, 0, .45)'}}>
            <div className="colorItem_title">Sub</div>
            <div className="colorItem_detail">rgba(0, 0, 0, .45)</div>
          </div>
          <div className="colorItem" style={{"background":'rgba(0, 0, 0, .25)','marginTop':'20px'}}>
            <div className="colorItem_title">Disabled</div>
            <div className="colorItem_detail">rgba(0, 0, 0, .25)</div>
          </div>
          <div className="colorItem" style={{"background":'rgba(0, 0, 0, .15)','marginTop':'20px'}}>
            <div className="colorItem_title">Border</div>
            <div className="colorItem_detail">rgba(0, 0, 0, .15)</div>
          </div>
          <div className="colorItem" style={{"background":'rgba(0, 0, 0, .04)','marginTop':'20px'}}>
            <div className="colorItem_title">Backgroud</div>
            <div className="colorItem_detail">rgba(0, 0, 0, .04)</div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default colorMatching