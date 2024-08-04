import { useEffect, useRef, useState } from "react";


function App() {
  const [count, setCount] = useState(60)
  
  const timerId  = useRef()

  // cách lấy giá trị hiện tại và trước đó của 1 useState
  const preCount = useRef()

  // lưu element dom bằng ref
  const h1Ref = useRef()

  useEffect(() => {
    preCount.current = count
  }, [count])

  useEffect(() => {
    console.log(h1Ref.current)
  }, [])

  const handleStart= () =>{
    // timerId.current để lấy được giá trị mà object do useRef trả về
    timerId.current = setInterval(() => {
      setCount(preCount => preCount - 1)
    }, 1000)
  }

  const handleEnd= () =>{
    clearInterval(timerId.current)
  }

  console.log('giá trị useState hiện tại ' + count, 'giá trị useState trước 1 lần render ' + preCount.current)
  return (
    <div style={{padding: 20}}>
        <h1 ref={h1Ref}>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleEnd}>End</button>
    </div>
  );
}

export default App;
