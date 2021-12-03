interface Options {
  extra : string | undefined
}

function scopedClassMaker(prefix: string){
  return function x(name?: string,options ?: Options){
    const result = [prefix,name].filter((item)=>item).join('-')
    if(options && options.extra){
      return [result,options.extra].filter((item)=>item).join(' ')
    }else{
      return result
    }
  }
}


export {scopedClassMaker}