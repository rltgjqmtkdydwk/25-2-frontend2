import { useState } from 'react'

function CounterUseState({step}: {step: number}) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + step)}>increase</button>
      <button onClick={() => setCount(count - step)}>decrease</button>
    </div>
  )
}

export default CounterUseState;