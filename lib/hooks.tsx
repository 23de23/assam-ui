import { useEffect, useRef, useState } from "react"

const useUpdate = (dep:boolean,fn:()=> void) => {
  const count = useRef(false)
  useEffect(() => {
    if(count.current){
      fn()
    }else{
      count.current = true
    }
  }, [dep])
}

const useToggle = (initialValue:boolean) => {
  const [expanded, setExpanded] = useState(initialValue)

  const expand = () => {
    setExpanded(true)
  }
  
  const collapse = () => {
    setExpanded(false)
  }

  return {
    value: expanded,
    expand,
    collapse
  }
}

export default useUpdate
export {
  useToggle
}