import { useEffect, useState } from "react"

const useUpdate = (dep:boolean,fn:()=> void) => {
  const [count,setCount] = useState(0)
  useEffect(() => {
    setCount(count +1)
    if(count>0){
      fn()
    }
  }, [dep])
}

export default useUpdate