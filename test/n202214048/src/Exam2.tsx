import React, { useState } from "react";
import Exam2Child from "./Exam2Child";

function Exam2() {
  const [id, setId] = useState("202214048");
  const [name, setName] = useState("김은총");

  function handleIdChange(e: any) {
    setId(e.target.value);
  }

  function handleNameChange(e: any) {
    setName(e.target.value);
  }

  return (
    <div className="exam-box exam2-box">
      <h3>Exam2</h3>
      <input value={id} onChange={handleIdChange} />
      <br />
      <input value={name} onChange={handleNameChange} />
      <Exam2Child id={id} name={name} />
    </div>
  );
}

export default Exam2;
