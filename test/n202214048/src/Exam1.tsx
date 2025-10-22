import React, { useState } from "react";

function Exam1() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(2);

  function handleChange(e: any) {
    setNum(Number(e.target.value));
  }

  function handleIncrease() {
    setCount(count + num);
  }

  function handleDecrease() {
    setCount(count - num);
  }

  return (
    <div className="exam-box exam1-box">
      <h3>Exam1</h3>
      <div className="count">{count}</div>

      <input type="text" value={num} onChange={handleChange} />
      <button onClick={handleIncrease}>증가</button>
      <button onClick={handleDecrease}>감소</button>
    </div>
  );
}

export default Exam1;
