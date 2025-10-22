import { useReducer } from 'react'

function CounterUseReducer({step}: {step: number}) {
  const reducer = (count: number, step: number) => count + step;
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(step)}>increase</button>
      <button onClick={() => dispatch(-step)}>decrease</button>
    </div>
  )
}

export default CounterUseReducer;