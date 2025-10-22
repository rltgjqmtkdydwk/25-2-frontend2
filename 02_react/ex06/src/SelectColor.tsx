import { useState } from 'react';

function SelectColor() {
  console.log("SelectColor");
  const [color, setColor] = useState('#bfb');
  return (
    <div className="form" style={{backgroundColor: color}}>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="#ffa">yellow</option>
        <option value="#bfb">green</option>
        <option value="#bbf">blue</option>
        <option value="#fbb">red</option>
      </select>
    </div>
  );
}

export default SelectColor;