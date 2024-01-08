import { useState } from "react"

export const App = () => {
  
const [count, setCount] = useState(0) //[stateVariable, setterFunction]

  const handleButtonClick = () => {
    setCount(count + 1)
  }
  
  return (
  <>
    <h1>Hello World.</h1>
    <div>This is amazing!</div>
    <button className="btn-secondary" onClick={handleButtonClick}>Click Me</button>
    <div>Count: {count}</div>
  </>

  )
}
