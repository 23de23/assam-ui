import { anyObject } from "./form"


type FormRules = Array<FormRule>
interface FormRule {
  key:string,
  required?:Boolean,
  minLength?:number,
  maxLength?:number,
  pattern?:RegExp,
  validator?:(key:string) => Promise<string>,
}
interface FormError {
  [k:string]:string[]
}



const validator = (formData:anyObject,rules:FormRules,callback:(errors:any)=>void):FormError => {
  let errors:any = {}
  const addError = (key:string,error:string | Promise<string>) => {
    if(!errors[key]){
      errors[key] = [error]
    }else{
      errors[key].push(error)
    }
  }
  rules.map((rule)=>{
    const value = formData[rule.key]
      if(rule.validator){
        const promise = rule.validator(value)
        addError(rule.key,promise)
      }

      if(rule.required && (value === undefined || value === null || value === '')){
        addError(rule.key,'请输入')
      }

      if(rule.minLength && value.length<rule.minLength){
        addError(rule.key,'小于最小值')
      }

      if(rule.maxLength && value.length>rule.maxLength){
        addError(rule.key,'大于最大值')
      }

      if(rule.pattern && !rule.pattern.test(value)){
        addError(rule.key,'请输入正确的值')
      }
  })
  
  const newErrors:[string,Promise<string>][] = falt(errors)

  const promiseList =  newErrors.map(([key,promiseOrSting]) => {
    const promise = promiseOrSting instanceof Promise ? promiseOrSting : Promise.reject(promiseOrSting)
    return promise.then(()=>[key,null],(rej)=>[key,rej])
  })


  Promise.all(promiseList).then((res)=>{
    let arr:{[k:string]:string[]} = {}
    res.filter((item) => Boolean(item[1])).map(([key,value]) => {
      arr[key] ? arr[key].push(value) : arr[key] = [value]
    })

    callback(arr)
  })

  return errors
}

function falt(data:{[k:string] : string|Promise<string>[]}) {
  let newErrors:any = []
  Object.entries(data).map(([key,val])=>{
    for(let i = 0; i<val.length; i++){
      newErrors.push([key,val[i]])
    }
  })
  return newErrors
}


export default validator