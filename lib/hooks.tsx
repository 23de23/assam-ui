import { useEffect, useRef } from "react"

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

export default useUpdate