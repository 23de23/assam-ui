function scopedClassMaker(prefix: string){
  return function x(name?: string){
    return [prefix,name].filter((item)=>item).join('-')
  }
}


export {scopedClassMaker}