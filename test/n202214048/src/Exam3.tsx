import React, { useState } from "react";

function Exam3() {
  const [num, setNum] = useState(2);

  function handleChange(e: any) {
    setNum(Number(e.target.value));
  }

  return (
    <div className="exam-box exam3-box">
      <h3>Exam3</h3>
      <input
        type="text"
        value={num}
        onChange={handleChange}
        min="1"
        max="9"
      />

      <table>
        <tbody>
          {Array.from({ length: 9 }, (_, i) => (
            <tr key={i}>
              <td>
                {num} * {i + 1} = {num * (i + 1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Exam3;
