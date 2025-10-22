import { useState } from 'react';
import './App.css';

function App() {
  console.log('App 렌더링');
  const [message, setMessage] = useState('hello');
  const [value, setValue] = useState(true);
  const helloTag = value && <div id="hello">Hello React.js</div>;
  const [color, setColor] = useState('green');
  // const [color, setColor] = useState('#bfb');
  const [gender, setGender] = useState('여자');
  return (
    <>
    {/* input */}
    <div id="app">
      <p>{ message }</p>
      <input type="text" onChange={e => setMessage(e.target.value)} value={message} />
    </div>
    {/* checkbox */}
    <div id="app">
      <p>{ value ? "true" : "false" }</p>
      <hr />
      <input type="checkbox" checked={value}
             onChange={(e) => setValue(e.target.checked)} />
      { helloTag }
    </div>
    {/* select#1 */}
    <div id="app" className={color}>
      <h1>select</h1>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option>yellow</option>
        <option>green</option>
        <option>blue</option>
        <option>red</option>
      </select>
    </div>
    {/* select#2 */}
    <div id="app" style={{backgroundColor: color}}>
      <h1>select</h1>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="#ffa">yellow</option>
        <option value="#bfb">green</option>
        <option value="#bbf">blue</option>
        <option value="#fbb">red</option>
      </select>
    </div>
    {/* radio */}
    <div id="app">
      <p>{ gender }</p>
      <hr />
      <label>
        <input type="radio" name="gender" 
               onChange={(e) => setGender('남자')} checked={ gender === '남자' } />
        <span>남자</span>
      </label>
      <label>
        <input type="radio" name="gender" 
               onChange={(e) => setGender('여자')} checked={ gender === '여자' } />
        <span>여자</span>
      </label>
    </div>
    </>
  );
}

export default App;