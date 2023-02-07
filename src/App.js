import './App.css';
import useState from "react";


const App = () => {

  const [count, setCount] = useState(0)

  const Minus = () => {
      setCount(count -1)
  }

  const Plus = () => {
      setCount(count +1)
  }

  const Plus5 = () => {
      setCount(count +5)
  }

  const Minus5 = () => {
      setCount(count -5)
  }

  const Reset = () => {
      setCount(0)
  }

  return (
      <div className="counter">
          <div classname="count">
          <div>{count}</div>
          <button onClick={Minus}>-</button>
          <button onClick={Plus}>+</button>
          <button onClick={Plus5}>+5</button>
          <button onClick={Minus5}>-5</button>
          <button onClick={Reset}>reset</button>
      
      
          </div>
      </div>
      )
  }

export default App
