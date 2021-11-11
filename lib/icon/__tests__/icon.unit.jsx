import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon.tsx'

describe('icon',()=>{
  it('xxx',()=>{
    const json = renderer.create(<Icon/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})