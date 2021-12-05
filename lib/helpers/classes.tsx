function classes(...names: (string | undefined)[]) {
    return names.filter((item)=>item).join(' ')    
}

export default classes



interface Options {
  extra : string | undefined
}

interface classToggles {
  [k:string] :boolean
}

const scopedClassMaker = (prefix: string) => 
  (name: string | classToggles,options ?: Options)=>
    Object
      .entries(typeof name ==='string' ? {[name]:name} : name)
      .filter((item)=>{return item[1] !== false})
      .map((item)=>{ return [prefix,item[0]]
        .filter((item)=>item)
        .join('-')})
      .concat(options && options.extra || [])
      .join(' ')

export {scopedClassMaker}
