import classes,{scopedClassMaker} from '../classes'
describe('classes',()=>{
   it('接收一个 className',()=>{
        const result = classes('a')
        expect(result).toEqual('a')
   })

   it('接受两个 className',()=>{
      const result = classes('a','b')
      expect(result).toEqual('a b')
   })

   it('接受 undefine 结果不会出现 undefine',()=>{
      const result = classes('a',undefined)
      expect(result).toEqual('a')
   })

   it('接受各种奇怪值',()=>{
      const result = classes('a',undefined,'中文',false,null)
      expect(result).toEqual('a 中文')
   })

   it('接受 0 个参数',()=>{
      const result = classes()
      expect(result).toEqual('')
   })
})

describe('scopedClassMaker',() => {
   it('scopedClassMaker 各种参数测试',() => {
      const sc = scopedClassMaker('assam')
      expect(sc('')).toEqual("assam")
      expect(sc('x')).toEqual("assam-x")
      expect(sc({aaa:true,bbb:false})).toEqual("assam-aaa")
      expect(sc({aaa:true,bbb:true})).toEqual("assam-aaa assam-bbb")
      expect(sc({aaa:true,bbb:true},{extra:"eg"})).toEqual("assam-aaa assam-bbb eg")
   })
})