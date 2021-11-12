import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon',()=>{
  it('render successfully',()=>{
    const json = renderer.create(<Icon name="alipay"/>).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('onClick',()=>{
    const fn = jest.fn()
    const component = mount(<Icon name='alipay' onClick={fn}/>)
    component.find('svg').simulate('click') //找到svg模拟click事件
    expect(fn).toBeCalled() //期待被调用
  })
})