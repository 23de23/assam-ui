import { anyObject } from "./form"


type FormRules = Array<FormRule>
interface FormRule {
  key:string,
  required?:Boolean,
  minLength?:number,
  maxLength?:number,
  pattern?:RegExp
}
interface FormError {
  [k:string]:string[]
}



const validator = (formData:anyObject,rules:FormRules):FormError => {
  let errors:any = {}
  const addError = (key:string,error:string) => {
    if(!errors[key]){
      errors[key] = [error]
    }else{
      errors[key].push(error)
    }
  }
  rules.map((rule)=>{
    const value = formData[rule.key]
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
  return errors
}


export default validator