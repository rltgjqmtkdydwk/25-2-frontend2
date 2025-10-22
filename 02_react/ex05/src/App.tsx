import { useState } from 'react';
import './App.css';

function Practice() {
  console.log('App 렌더링');
  const [count, setCount] = useState(0);
  const increase = () => { setCount(count + 1); };
  const decrease = () => { setCount(count - 1); };
  return (
    <div>
      {/* practice */}
      <p 
      onClick={increase} 
      style={{ color: count % 2 ? "red" : "blue" }}>
        {count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default Practice;