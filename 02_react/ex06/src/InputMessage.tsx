import { useState } from 'react';

function InputMessage() {
  console.log("InputMessage");
  const [message, setMessage] = useState('hello');
  return (
    <div className="form">
      <input type="text" onChange={e => setMessage(e.target.value)} value={message} />
      <p>{ message }</p>
    </div>
  );
}

export default InputMessage;